import { INotificationController } from "../types";
import { Request, Response } from "express";
import * as config from 'config';
import { Notifications } from "../models/notification";
import { Message } from "../models/message";
import { log } from "../index";
import * as jwt from 'jsonwebtoken';
import {validationResult} from "express-validator/check";
export class NotificationController implements INotificationController {
    public async addNotification(req: Request, res: Response) {
        let notify = await new Notifications({message: req.body.message, user: req.body.user, level: req.body.level, board: req.body.board}).save();
        return res.status(200).send({success: true});
    }
    public async deleteNotification(req: Request, res: Response) {
        const auth = req.get("Authorization");
        let id;
        // validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const token = auth.replace("Bearer ", "").trim();

        jwt.verify(token, config.get("login.secretKey"), (err, data) => {
            if (err) {
                log.error('Error verifying user token:', err.message);
                return res.status(400).send({
                    errorMessage : err.message,
                });
            }
            // tslint:disable:no-unused-variable
            const {timestamp, ...decoded} = data;
            id = decoded.id;
        });
        await Notifications.deleteOne({_id: req.body.id});
        let notify = await Notifications.find({level: req.body.level, board: req.body.board, user: id}, 'message');
        return res.status(200).send({success: true, notifications: notify});
    }
    public async getNotification(req: Request, res: Response) {
        const auth = req.get("Authorization");
        let id;
        // validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const token = auth.replace("Bearer ", "").trim();

        jwt.verify(token, config.get("login.secretKey"), (err, data) => {
            if (err) {
                log.error('Error verifying user token:', err.message);
                return res.status(400).send({
                    errorMessage : err.message,
                });
            }
            // tslint:disable:no-unused-variable
            const {timestamp, ...decoded} = data;
            id = decoded.id;
        });
        let notify = await Notifications.find({level: req.body.level, board: req.body.board, user: id}, 'message');
        const messages = await Message.find({board: req.body.board, isWelcomeMsg: false});
        return res.status(200).send({success: true, notifications: notify, lastMessageCount: messages.length});
    }
    public async updateLastSeen(req: Request, res: Response) {
        return res.status(200).send({success: true});
    }
}