import { IMessageController } from "../types";
import { Request, Response } from "express";
import * as config from 'config';
import { Message } from "../models/message";
import * as jwt from 'jsonwebtoken';
import { log } from "../index";
import {validationResult} from "express-validator/check";
export class MessageController implements IMessageController {
    public  async  sendMessage(sender, receiver, text, boardId, isWelcomeMsg){
        await new Message({username: sender, inWhisper:receiver, message: text, board: boardId, isWelcomeMsg:isWelcomeMsg}).save();
    }

    public async getMessage(boardId){
        const messages = await Message.find({board: boardId, isWelcomeMsg: false}, '-_id username message date inWhisper');
        const welcomemesssage = await Message.findOne({board: boardId, isWelcomeMsg: true}, '-_id message');
        let message = {welcomemesssage: welcomemesssage, messages: messages};
        return message;
    }
    public async getMessageCount(req: Request, res: Response) {
        const messages = await Message.find({board: req.body.board, isWelcomeMsg: false}, '-_id username message date inWhisper');
        return res.status(200).send({
            count: messages.length,
            success: true
        })
    }

}