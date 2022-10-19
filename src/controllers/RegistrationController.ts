
import { IRegistrationController } from "../types";
import { Request, Response} from "express";
import { User} from "../models/user";
import { Token }   from "../models/token";
import * as bcrypt from "bcryptjs";
import { registrationClient, log } from "../index";
import { validationResult } from "express-validator/check";
import * as jwt from 'jsonwebtoken';
import * as config from 'config';
import * as crypto from 'crypto';

export class RegistrationController implements IRegistrationController {

    public registerUser(req: Request, res: Response) {
       // validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const newUser = new User(req.body);
        registrationClient.createTempUser(newUser, (err, existingPersistentUser, newTempUser) => {
            if (err) {
                log.error("Error creating temp user ", err);
                return res.status(500).send({ errorMessage: err.message });
            }
            // user already exists in persistent collection
            if (existingPersistentUser) {
                return res.status(500).send({
                    clientErrorCode : 'You have already signed up and confirmed your account',
                });
            }

            // new user created
            if (newTempUser) {
                const URL = newTempUser[registrationClient.options.URLFieldName];
                console.log(URL);
                registrationClient.sendVerificationEmail(req.body.email, URL, (error, info) => {
                    if (error) {
                        log.error('Sending verification email FAILED', error);
                        return res.status(500).send({
                            errorMessage: error.message,
                        });
                    }
                    res.json({
                        clientErrorCode: true,
                    });

                });
                // user already exists in temporary collection!
            } else {
                return res.status(200).send({
                    clientErrorCode : 'You have already signed up. Please check your email to verify your account',
                });
            }
        });

    };
    public async confirmInviteToken(req: Request, res: Response) {
        try {
                const token = await Token.findOne({
                token: req.query.token,
            });
            if (!token) return res.status(400).send("Invalid link or expired");
    
            
            res.json({
                success: true
            });
        } catch (error) {
            res.send("An error occured");
            console.log(error);
        }
    }
    public async generateInviterToken(req: Request, res: Response) {
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
        if (!user)  return res.status(400).send("user with given email doesn't exist");
        let invitetoken = await Token.findOne({ userId: user._id });
        if (!invitetoken) {
            invitetoken = await new Token({
                userId: user._id,
                token: crypto.randomBytes(32).toString("hex"),
            }).save();
        }
        const emailOptions: any = config.get("email");
        const link = `${emailOptions.baseURL}/register?token=${invitetoken.token}`;
        return res.status(200).send({"success":true, "link": link});
    }

    public async createUser(req: Request, res: Response) {
        let user = await User.findOne({ username: req.body.username});
        try
{            if(!user){
                user = new User;
                console.log(user);
                user.name = req.body.name;
                user.surname = req.body.surname;
                user.username = req.body.username;
                user.tel = req.body.tel;
                user.email = req.body.email;
                let inviter = await User.findOne({ username: req.body.inviterusername});
                inviter.invitedCount ++;
                await inviter.save();
                const salt = await bcrypt.genSalt(8);

                user.password = await bcrypt.hash(req.body.password, salt);
                await user.save();
                return res.status(200).send({"success":true});
            }

        }catch(err){
            return res.status(401).send({"error":"server error"});
        }
        }

}
