
import { IServer } from "./types";
import * as express from "express";
import * as mongoose from 'mongoose';
import * as config from "config";
import * as parser from "body-parser";
import {Routes} from "./router";
import {log} from "./index";
import * as cors from 'cors';
import * as http from 'http';
import * as path from 'path';
import { controllers } from "./controllers";
export class Server implements IServer {

    public app: express.Application = express();
    public serverStarted: boolean = false;
    public server = null;


    public async start() {
        log.info("Starting server");
        this.app.use(parser.json());
        // to support URL-encoded bodies
        this.app.use(parser.urlencoded({
            extended: true,
        }));
        this.app.use(cors());
        this.app.use('/api/v1', new Routes().routes()); 
        this.app.use(express.static(path.join(__dirname , "../../", "public")));
        this.app.use("*", (req, res) => {
            res.sendFile(path.resolve(__dirname, '../../', 'public', "index.html"))
        })
        this.server = http.createServer(this.app);
        // Start the app by listening on the default
        // Heroku port
        const io = require('socket.io')(this.server, {
            cors: {
              origin: '*',
            }
          });          
        io.on('connection', socket => {
            socket.on('add user', (username, boardId, fn) => {
                controllers.messager.addUser(username, boardId);
                fn();
            });
            socket.on('get users', (boardId, fn) => {
                controllers.messager.getUser(boardId)
                    .then((oldusers) =>{
                        let users = [];
                        oldusers.map((item) => {users.push(item.username)})
                        socket.emit('users', {users}) ;
                        fn();
                    });
            });
            socket.on('get messages', (boardId) => {
                controllers.message.getMessage(boardId)
                    .then((message) =>{
                        socket.emit('messages', message) ;
                    });
            });
        
            socket.on('whisper', (receiver, sender, message, boardId, fn) =>{
                controllers.message.sendMessage(sender, receiver, message, boardId, false);
                controllers.message.getMessage(boardId)
                    .then((message) =>{
                        io.emit('messages', message) ;
                    });
            })
            socket.on('new message', (sender, message, boardId, fn) =>{
                controllers.message.sendMessage(sender,null, message, boardId, false);
                controllers.message.getMessage(boardId)
                    .then((message) =>{
                        io.emit('messages', message) ;
                    });
            })
            socket.on('welcomeMessage', (message, boardId, fn) =>{
                controllers.message.sendMessage(null, null, message, boardId, true);
                controllers.message.getMessage(boardId)
                    .then((message) =>{
                        io.emit('messages', message) ;
                    });
            })
          });

        return this.server.listen(process.env.PORT || config.get("service.api.port"),
            () => this.serverStarted = true);

    }

    public async stop() {
        if (this.serverStarted) {
            log.info("Stopping server");
            await mongoose.connection.close();
            await this.server.close();
        }

    }
}
