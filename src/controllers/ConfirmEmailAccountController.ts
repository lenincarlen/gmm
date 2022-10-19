import { IConfirmEmailAccountController } from "../types";
import { Request, Response} from "express";
import { registrationClient, log } from "../index";
import {validationResult} from "express-validator/check";
import { Token }   from "../models/token";
import { User } from "../models/user";
import { Boardlist } from "../models/boardlist";
export class ConfirmEmailAccountController implements IConfirmEmailAccountController {

    public confirmEmail(req: Request, res: Response) {
        const id = req.query.token;
        // validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        registrationClient.confirmTempUser(id, (err, user) => {
            if (err) {
                log.error('Confirming temp user FAILED', err);
                return res.status(500).send({
                    errorMessage: err.message,
                });
            }
            if (user) {
                if(user.referralToken != 'false'){
                    Token.findOne({token: user.referralToken}, function( err, token){
                        if(err){
                            return res.status(404).json({
                              message: `Inviter is not available`,
                            });
                        } 
                        else{
                            User.findById(token.userId, function( err, user1){
                                if(err){
                                    return res.status(404).json({
                                      message: `Inviter is not available`,
                                    });
                                } 
                                else{
                                    user1.invitedCount ++;
                                    user1.save((err)=>{
                                        if(!err){
                                            user.referralToken = user1._id;
                                            user.save((err)=>{
                                                if(!err){
                                                    token.remove((err) => {
                                                        if(!err){
                                                            Boardlist.find({ userid: user.referralToken})
                                                                .then((boardlist)=>{
                                                                if(!boardlist || boardlist.length == 0){
                                                                    return res.status(404).send("Not found Board");
                                                                }
                                                                boardlist.map((boarditem) => {
                                                                    let newBoard = new Boardlist({userid: user._id, board: boarditem.board}).save();
                                                                })
                                                              
                                                                res.json({
                                                                    success: true,
                                                                });
                                                            });

                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    });
                                }

                            });
                        }
                    });
                }

            } else {
                log.error('Invalid/Expired Verification Id', id);
                return res.status(400).send({
                    errorMessage: "Invalid/Expired Verification Id",
                });
            }
        });

    }
}
