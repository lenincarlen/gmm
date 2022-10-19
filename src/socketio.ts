// import * as http from "http";
// import * as express from "express";
// import * as Server from "socket.io";
// import  { Socket } from "socket.io";
// import {log} from "./index";
// const socket = (server: http.Server, app: express.Application) => {
//   const io = Server(server);
//   app.set("io", io);
//   log.info('socket starting?');
//   io.on("connection", (socket: Socket) => {
//     const req = socket.request;
//     const ip = req.headers["X-forwarded-for"] || req.socket.remoteAddress;
//     console.log("client connected!", ip, socket.id);
//     socket.on("reply", (data) => {
//       console.log(data);
//     });
//     socket.on("error", (error) => {
//       console.error(error);
//     });
//     socket.on("disconnect", () => {
//       console.log("client disconneted", ip, socket.id);
//     });
//   });
// };

// export default socket;