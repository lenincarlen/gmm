import { IBoardController } from "../types";
import { Request, Response } from "express";
import * as config from 'config';
import { User } from "../models/user";
import { Board } from "../models/board";
import { Boardlist } from "../models/boardlist";
import * as jwt from 'jsonwebtoken';
import { log } from "../index";
import {validationResult} from "express-validator/check";
export class BoardController implements IBoardController {
    public async createBoard(req: Request, res: Response) {
        try {
            let board = await new Board;
            board.senior_1.user = req.body.senior_1;
            board.junior_1.user = req.body.junior_1;
            board.junior_2.user = req.body.junior_2;
            board.Sophmore_1.user = req.body.Sophmore_1;
            board.fillcount = req.body.fillcount;
            board.treevalue = req.body.treevalue;
            await board.save();

            res.json({
                success: true
            });
        } catch (error) {
            res.status(400).send({errorMessage: "An error occured"});
            console.log(error);
        }
    }
    public async addToBoardlist(req: Request, res: Response) {
        let user = await User.findOne({ username: req.body.username});
        try {
            let boardlist = new Boardlist;
            boardlist.userid = user._id;
            boardlist.board = req.body.board;
            boardlist.level = req.body.level;
            await boardlist.save();
            res.json({
                success: true
            });
        } catch (error) {
            res.status(400).send({errorMessage: "An error occured"});
            console.log(error);
        }
    } 
    //'junior_1.user','junior_2.user','Sophmore_1.user','Sophmore_2.user','Sophmore_3.user','Sophmore_4.user'
    public async viewBoard(req: Request, res: Response) {
        let board = await Board.findById(req.params.id).populate({
            path: 'senior_1.user',
            select: ['deletion', 'email', 'invitedCount', 'level', 'name', 'surname', 'tel', 'username', '_id'],
            model: User})
            .populate({
                path: 'junior_1.user',
                select: ['deletion', 'email', 'invitedCount', 'level', 'name', 'surname', 'tel', 'username', '_id'],
                model: User})
            .populate({
                path: 'junior_2.user',
                select: ['deletion', 'email', 'invitedCount', 'level', 'name', 'surname', 'tel', 'username', '_id'],
                model: User})
            .populate({
                path: 'junior_1.user',
                select: ['deletion', 'email', 'invitedCount', 'level', 'name', 'surname', 'tel', 'username', '_id'],
                model: User})
            .populate({
                path: 'Sophmore_1.user',
                select: ['deletion', 'email', 'invitedCount', 'level', 'name', 'surname', 'tel', 'username', '_id'],
                model: User})
            .populate({
                path: 'Sophmore_2.user',
                select: ['deletion', 'email', 'invitedCount', 'level', 'name', 'surname', 'tel', 'username', '_id'],
                model: User})
            .populate({
                path: 'Sophmore_3.user',
                select: ['deletion', 'email', 'invitedCount', 'level', 'name', 'surname', 'tel', 'username', '_id'],
                model: User})
            .populate({
                path: 'Sophmore_4.user',
                select: ['deletion', 'email', 'invitedCount', 'level', 'name', 'surname', 'tel', 'username', '_id'],
                model: User})
            .populate({
                path: 'Freshman_1.user',
                select: ['deletion', 'email', 'invitedCount', 'level', 'name', 'surname', 'tel', 'username', '_id'],
                model: User})
            .populate({
                path: 'Freshman_2.user',
                select: ['deletion', 'email', 'invitedCount', 'level', 'name', 'surname', 'tel', 'username', '_id'],
                model: User})
            .populate({
                path: 'Freshman_3.user',
                select: ['deletion', 'email', 'invitedCount', 'level', 'name', 'surname', 'tel', 'username', '_id'],
                model: User})
            .populate({
                path: 'Freshman_4.user',
                select: ['deletion', 'email', 'invitedCount', 'level', 'name', 'surname', 'tel', 'username', '_id'],
                model: User})
            .populate({
                path: 'Freshman_5.user',
                select: ['deletion', 'email', 'invitedCount', 'level', 'name', 'surname', 'tel', 'username', '_id'],
                model: User})
            .populate({
                path: 'Freshman_6.user',
                select: ['deletion', 'email', 'invitedCount', 'level', 'name', 'surname', 'tel', 'username', '_id'],
                model: User})
            .populate({
                path: 'Freshman_7.user',
                select: ['deletion', 'email', 'invitedCount', 'level', 'name', 'surname', 'tel', 'username', '_id'],
                model: User})
            .populate({
                path: 'Freshman_8.user',
                select: ['deletion', 'email', 'invitedCount', 'level', 'name', 'surname', 'tel', 'username', '_id'],
                model: User});  
        try {
            
            if(!board){
                return res.status(404).send("Not found Board");
            }
            let newboard = board;
            if(board.Freshman_1.user == null)  newboard.Freshman_1 = null;
            if(board.Freshman_2.user == null)  newboard.Freshman_2 = null;
            if(board.Freshman_3.user == null)  newboard.Freshman_3 = null;
            if(board.Freshman_4.user == null)  newboard.Freshman_4 = null;
            if(board.Freshman_5.user == null)  newboard.Freshman_5 = null;
            if(board.Freshman_6.user == null)  newboard.Freshman_6 = null;
            if(board.Freshman_7.user == null)  newboard.Freshman_7 = null;
            if(board.Freshman_8.user == null)  newboard.Freshman_8 = null;
            if(board.Sophmore_1.user == null)  newboard.Sophmore_1 = null;
            if(board.Sophmore_2.user == null)  newboard.Sophmore_2 = null;
            if(board.Sophmore_3.user == null)  newboard.Sophmore_3 = null;
            if(board.Sophmore_4.user == null)  newboard.Sophmore_4 = null;
            if(board.junior_1.user == null)  newboard.junior_1 = null;
            if(board.junior_2.user == null)  newboard.junior_2 = null;
            if(board.senior_1.user == null)  newboard.senior_1 = null;
            res.json({
                success: true,
                board: newboard
            });
        } catch (error) {
            res.status(400).send({errorMessage: "An error occured"});
            console.log(error);
        }
    }
    public async getActiveBoard(req: Request, res: Response) {
        try {
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
            let board =  await Boardlist.find({ userid: id, beforeJoin: true }).populate({path: 'board'});
            // if(!board || board.length == 0){
            //     return res.status(404).send("Not found Board");
            // }
            let newboard = [];
            board.map((item)=>{
                newboard.push({board: item.board._id, _id: item._id, confirmed: item.confirmed, level: item.board.treevalue});
            })
            res.json({
                success: true,
                perpetualUsers: newboard
            });
        } catch (error) {
            res.status(400).send({errorMessage: "An error occured"});
            console.log(error);
        }
    }
    public async jointoBoard(req: Request, res: Response) {
        try {
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
            let user = await User.findById(id);
            let board =  await Boardlist.find({ userid: user._id}).populate({path: 'board', match: {treevalue : req.body.boardLevel}});
            if(!board || board.length == 0){
                return res.status(404).send("Not found Board");
            }
            board[0].beforeJoin = true;
            await board[0].save();

            let boarddetail = await Board.findById(board[0].board);
            if(boarddetail.Freshman_1.user == null) {
                boarddetail.Freshman_1.user = board[0].userid;
                await boarddetail.save();
                return res.json({
                    success: true,
                });
            }
            if(boarddetail.Freshman_2.user == null) {
                boarddetail.Freshman_2.user = board[0].userid;
                await boarddetail.save();
                return res.json({
                    success: true,
                });
            }
            if(boarddetail.Freshman_3.user == null) {
                boarddetail.Freshman_3.user = board[0].userid;
                await boarddetail.save();
                return res.json({
                    success: true,
                });
            }
            if(boarddetail.Freshman_4.user == null) {
                boarddetail.Freshman_4.user = board[0].userid;
                await boarddetail.save();
                return res.json({
                    success: true,
                });
            }
            if(boarddetail.Freshman_5.user == null) {
                boarddetail.Freshman_5.user = board[0].userid;
                await boarddetail.save();
                return res.json({
                    success: true,
                });
            }
            if(boarddetail.Freshman_6.user == null) {
                boarddetail.Freshman_6.user = board[0].userid;
                await boarddetail.save();
                return res.json({
                    success: true,
                });
            }
            if(boarddetail.Freshman_7.user == null) {
                boarddetail.Freshman_7.user = board[0].userid;
                await boarddetail.save();
                return res.json({
                    success: true,
                });
            }
            if(boarddetail.Freshman_8.user == null) {
                boarddetail.Freshman_8.user = board[0].userid;
                await boarddetail.save();
                return res.json({
                    success: true,
                });
            }

        } catch (error) {
            res.status(400).send({errorMessage: "An error occured"});
            console.log(error);
        }
    }

    public async removeUser(req: Request, res: Response) {
        let user = await Boardlist.findOne({board: req.params.board, userid: req.params.user});
        if(!user)
        {return res.json({
            errorMessage: "not found user",
        });}
        user.beforeJoin = 'false';
        await user.save();
        let boarddetail = await Board.findById(user.board);
        if(boarddetail.Freshman_1.user.equals(user.userid)) {
            boarddetail.Freshman_1.user = null;
            await boarddetail.save();
            return res.json({
                success: true,
            });
        }
        if(boarddetail.Freshman_2.user.equals(user.userid)) {
            boarddetail.Freshman_2.user = null;
            await boarddetail.save();
            return res.json({
                success: true,
            });
        }
        if(boarddetail.Freshman_3.user.equals(user.userid)) {
            boarddetail.Freshman_3.user = null;
            await boarddetail.save();
            return res.json({
                success: true,
            });
        }
        if(boarddetail.Freshman_4.user.equals(user.userid)) {
            boarddetail.Freshman_4.user = null;
            await boarddetail.save();
            return res.json({
                success: true,
            });
        }
        if(boarddetail.Freshman_5.user.equals(user.userid)) {
            boarddetail.Freshman_5.user = null;
            await boarddetail.save();
            return res.json({
                success: true,
            });
        }
        if(boarddetail.Freshman_6.user.equals(user.userid)) {
            boarddetail.Freshman_6.user = null;
            await boarddetail.save();
            return res.json({
                success: true,
            });
        }
        if(boarddetail.Freshman_7.user.equals(user.userid)) {
            boarddetail.Freshman_7.user = null;
            await boarddetail.save();
            return res.json({
                success: true,
            });
        }
        if(boarddetail.Freshman_8.user.equals(user.userid)) {
            boarddetail.Freshman_8.user = null;
            await boarddetail.save();
            return res.json({
                success: true,
            });
        }
    }
    public async confirmUser(req: Request, res: Response) {
        let user = await Boardlist.findOne({board: req.params.board, userid: req.params.user});
        if(!user)
        {return res.json({
            errorMessage: "not found user",
        });}
        user.confirmed = 'true';
        await user.save();
        let boarddetail = await Board.findById(user.board);
        if(boarddetail.Freshman_1.user.equals(user.userid)) {
            boarddetail.Freshman_1.confirmed = true;
            await boarddetail.save();
            return res.json({
                success: true,
            });
        }
        if(boarddetail.Freshman_2.user.equals(user.userid)) {
            boarddetail.Freshman_2.confirmed = true;
            await boarddetail.save();
            return res.json({
                success: true,
            });
        }
        if(boarddetail.Freshman_3.user.equals(user.userid)) {
            boarddetail.Freshman_3.confirmed = true;
            await boarddetail.save();
            return res.json({
                success: true,
            });
        }
        if(boarddetail.Freshman_4.user.equals(user.userid)) {
            boarddetail.Freshman_4.confirmed = true;
            await boarddetail.save();
            return res.json({
                success: true,
            });
        }
        if(boarddetail.Freshman_5.user.equals(user.userid)) {
            boarddetail.Freshman_5.confirmed = true;
            await boarddetail.save();
            return res.json({
                success: true,
            });
        }
        if(boarddetail.Freshman_6.user.equals(user.userid)) {
            boarddetail.Freshman_6.confirmed = true;
            await boarddetail.save();
            return res.json({
                success: true,
            });
        }
        if(boarddetail.Freshman_7.user.equals(user.userid)) {
            boarddetail.Freshman_7.confirmed = true;
            await boarddetail.save();
            return res.json({
                success: true,
            });
        }
        if(boarddetail.Freshman_8.user.equals(user.userid)) {
            boarddetail.Freshman_8.confirmed = true;
            await boarddetail.save();
            return res.json({
                success: true,
            });
        }
    }

    public async quitBoard(req: Request, res: Response) {
        try {
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
            let user = await Boardlist.findOne({board: req.params.board, userid: id});
            if(!user)
            {return res.json({
                errorMessage: "not found user",
            });}
            user.beforeJoin = 'false';
            await user.save();
            let boarddetail = await Board.findById(user.board);
            if(boarddetail.Freshman_1.user.equals(user.userid)) {
                boarddetail.Freshman_1.user = null;
                boarddetail.Freshman_1.confirmed = false;
                await boarddetail.save();
                return res.json({
                    success: true,
                });
            }
            if(boarddetail.Freshman_2.user.equals(user.userid)) {
                boarddetail.Freshman_2.user = null;
                boarddetail.Freshman_2.confirmed = false;
                await boarddetail.save();
                return res.json({
                    success: true,
                });
            }
            if(boarddetail.Freshman_3.user.equals(user.userid)) {
                boarddetail.Freshman_3.user = null;
                boarddetail.Freshman_3.confirmed = false;
                await boarddetail.save();
                return res.json({
                    success: true,
                });
            }
            if(boarddetail.Freshman_4.user.equals(user.userid)) {
                boarddetail.Freshman_4.user = null;
                boarddetail.Freshman_4.confirmed = false;
                await boarddetail.save();
                return res.json({
                    success: true,
                });
            }
            if(boarddetail.Freshman_5.user.equals(user.userid)) {
                boarddetail.Freshman_5.user = null;
                boarddetail.Freshman_5.confirmed = false;
                await boarddetail.save();
                return res.json({
                    success: true,
                });
            }
            if(boarddetail.Freshman_6.user.equals(user.userid)) {
                boarddetail.Freshman_6.user = null;
                boarddetail.Freshman_6.confirmed = false;
                await boarddetail.save();
                return res.json({
                    success: true,
                });
            }
            if(boarddetail.Freshman_7.user.equals(user.userid)) {
                boarddetail.Freshman_7.user = null;
                boarddetail.Freshman_7.confirmed = false;
                await boarddetail.save();
                return res.json({
                    success: true,
                });
            }
            if(boarddetail.Freshman_8.user.equals(user.userid)) {
                boarddetail.Freshman_8.user = null;
                boarddetail.Freshman_8.confirmed = false;
                await boarddetail.save();
                return res.json({
                    success: true,
                });
            }
        } catch (error) {
            res.status(400).send({errorMessage: "An error occured"});
            console.log(error);
        }
    }

}
