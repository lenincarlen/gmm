import {ILoginController} from "../types";
import { Request, Response} from "express";
import * as config from 'config';
import * as crypto from 'crypto';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { User } from "../models/user";
import { Token }   from "../models/token";
import { log } from "../index";
import {validationResult} from "express-validator/check";
import * as nodemailer from 'nodemailer';
import * as handlebars from "handlebars";
import * as path from 'path';
import * as fs from 'fs';

export class LoginController implements ILoginController {

    public loginUser(req: Request, res: Response) {
        const email = req.body.emailOrUsername;
        const password = req.body.password;

        // validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        User.findOne({ $or: [ {email: email}, {username: email}]}, async (err, user) => {
            if (err) {
                log.error('Error finding user:', err);
                return res.status(500).send({
                    errorMessage : err.message,
                });
            } else if (user) {
                if ( bcrypt.compareSync(password, user.password)) {
                    const expiresIn = config.get("login.tokenExpiry");
                    const token = await jwt.sign({ email: user.email, id: user._id, timestamp: Date.now() },
                                                config.get("login.secretKey"),
                                                { expiresIn: Number(expiresIn) });
                    return res.status(200).send({ success: true, token: token });

                } else {
                    log.error('Error invalid user credentials:');
                    return res.status(401).send({
                        errorMessage : 'invalid credentials',
                    });
                }

            } else {
                log.error('no user with email id provided');
                return res.status(401).send({
                    errorMessage : 'no user with email id provided',
                });
            }
        }).lean();
    }

    public async sendUpdatePassword(req: Request, res: Response) {
        const user = await User.findOne({ email: req.body.email });
        if (!user)  return res.status(400).send("user with given email doesn't exist");
        let token = await Token.findOne({ userId: user._id });
        if (!token) {
            token = await new Token({
                userId: user._id,
                token: crypto.randomBytes(32).toString("hex"),
            }).save();
        }
        
        const emailOptions: any = config.get("email");
        const mailHogServer = emailOptions.mailhog;
        const mailService = emailOptions.server;
        const filePath = path.join(__dirname, '../../../resettemplate.html');
        const source = fs.readFileSync(filePath, 'utf-8').toString();
        const template = handlebars.compile(source);
        let transportOptions: any = {
            host: mailHogServer.host,
            port: mailHogServer.port,
            secure: mailHogServer.secure, // true for 465, false for other ports
        };
        if (emailOptions.use === "server") {
            transportOptions = {
                service : mailService.service,
                auth: {
                    user: mailService.user,
                    pass: mailService.pass,
                },
            };
        }

        const link = `${emailOptions.baseURL}/reset?token=${token.token}&id=${user._id}`;
        let mailOptions : any=  {
            from: "Do Not Reply <" + mailService.user + ">",
            to: req.body.email,
            subject: "Confirm your account",
            html: template({verifyURL: link}),
            text: "Please verify your account to reset password by clicking the following link, or by copying and pasting it into your browser: ${URL}",
        };
        let transporter = nodemailer.createTransport(transportOptions);
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
            res.status(200).json({success: true});
              //  res.render('index');
        });
    }

    public async receiveUpdatePassword(req: Request, res: Response) {
        try {
            const user = await User.findById(req.query.id);
            if (!user) return res.status(400).send("invalid link or expired1");
    
            const salt = await bcrypt.genSalt(8);

            user.password = await bcrypt.hash(req.body.password, salt);

            await user.save();
    
            res.send({success: true});
        } catch (error) {
            res.send("An error occured");
            console.log(error);
        }
    }

    public async confirmResetToken(req: Request, res: Response) {
        try {
            const user = await User.findById(req.query.id);
            if (!user) return res.status(400).send("invalid link or expired");
    
            const token = await Token.findOne({
                userId: user._id,
                token: req.query.token,
            });
            if (!token) return res.status(400).send("Invalid link or expired");
    
        
            await token.remove();
    
            res.json({
                message: 'Successfully confirmed the Reset Password Token',
            });
        } catch (error) {
            res.send("An error occured");
            console.log(error);
        }
    }

    public async getUserData(req: Request, res: Response) {
        const auth = req.get("Authorization");
        let email;
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
            email = decoded.email;
        });
        let user =  await User.findOne({ email: email });
        return res.status(200).send({"success":true, "user": user});
    }
    public async getUsers(req: Request, res: Response) {
        let user =  await User.find({role: false});
        return res.status(200).send({"success":true, "user": user});
    }
    public async updateUserData(req: Request, res: Response) {
        const auth = req.get("Authorization");
        let email;
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
            email = decoded.email;
        });
        let user =  await User.findOneAndUpdate({ email: email }, req.body);
        return res.status(200).send({"success":true});
    }

    public async changePassword(req: Request, res: Response) {
        const auth = req.get("Authorization");
        let email;
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
            email = decoded.email;
        });
        let user =  await User.findOne({ email: email });
        if ( bcrypt.compareSync(req.body.oldPassword, user.password)) {
            const salt = await bcrypt.genSalt(8);
            user.password = await bcrypt.hash(req.body.password, salt);
            await user.save();
            return res.status(200).send({"success":true});

        } else {
            log.error('Error invalid user credentials:');
            return res.status(401).send({
                errorMessage : 'invalid credentials',
            });
        }
    }
}
