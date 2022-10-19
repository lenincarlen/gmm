import { IVerifyTokenController } from "../types";
import { Request, Response, NextFunction } from "express";
import * as config from 'config';
import * as jwt from 'jsonwebtoken';
import { log } from "../index";
import { User } from "../models/user";
import { validationResult } from "express-validator/check";
import e = require("express");

export  function auth(req: Request, res: Response, next: NextFunction) {
    const auth = req.get("Authorization");

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
        //return res.send(decoded);
        
		return next();
    });
};

export  function isAdmin(req: Request, res: Response, next: NextFunction) {
    const auth = req.get("Authorization");

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
        //return res.send(decoded);
        User.findById(decoded.id, (err, user)=>{
            if(!err){
                if(user.role != true){
                    return res.status(400).send({
                        errorMessage : "not allowed",
                    });
                }
                else{
                    return next();
                }
            }
            else{
                return res.status(400).send({
                    errorMessage : err.message,
                });
            }
        })
    });
};
