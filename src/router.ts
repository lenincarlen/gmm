
import {Request, Response, Router} from "express";
import {IRoutes} from "./types";
import * as mongoose from 'mongoose';
import * as swaggerUI from "swagger-ui-express";
import { controllers } from "./controllers";
import contract from "./contract";
import * as passport from 'passport';
import { auth, isAdmin } from "./middleware/auth";
import {
    confirmEmailValidationRules,
    loginValidationRules,
    resendEmailValidationRules,
    signUpValidationRules,
    tokenValidationRules,
    resetPasswordRules,
    setNewPasswordRules,
    confirmResetValidateionRules,
    confirmInviteValidationRules,
    joinBoardValidationRules
} from "./validators";

export class Routes implements IRoutes {

    public routes(): Router {

        const router = Router();

        // MOST IMPORTANT: Service health check : should confirm the dependencies are healthy
        router.get("/health", (req: Request, res: Response) => {
               if (mongoose.connection.readyState === 1) {

                   return res.status(200).send({
                       message: 'Server is up and running !!',
                   });
               }

               return res.status(500).send({
                errorMessage: "MongoDB isn't connected",
               });

        });
        router.post("/addtoBoardlist", controllers.board.addToBoardlist);
        router.post("/createUser", controllers.registration.createUser);
        router.post("/createBoard", controllers.board.createBoard);
        router.get("/boards/view/:id", controllers.board.viewBoard);
        router.get('/boards/active', controllers.board.getActiveBoard);
        router.post('/boards/join', joinBoardValidationRules, controllers.board.jointoBoard);
        router.get("/user/me", controllers.login.getUserData);
        router.post("/user/me", auth, controllers.login.updateUserData);
        router.post('/user/chanePassword', auth, controllers.login.changePassword);
        router.post('/chat/getMessageCount', auth, controllers.message.getMessageCount);
        router.post("/user/register", signUpValidationRules, controllers.registration.registerUser);
        router.delete('/boards/remove/:board/:user', controllers.board.removeUser);
        router.put('/boards/confirm/:board/:user', controllers.board.confirmUser);
        router.post('/boards/quit/:board', auth, controllers.board.quitBoard);
        router.get("/user/generateInviterToken", auth, controllers.registration.generateInviterToken);
        router.post('/notifications/add', controllers.notification.addNotification);
        router.post('/notifications/updateLastSeen', auth, controllers.notification.updateLastSeen);
        router.post('/notifications/get', auth, controllers.notification.getNotification);
        router.post('/notifications/delete', auth, controllers.notification.deleteNotification);
        router.post("/resend-email", resendEmailValidationRules, controllers.resendEmail.resendEmail);

        router.get('/user/getUsers', isAdmin, controllers.login.getUsers);
        router.post('/user/recoverPassword', resetPasswordRules, controllers.login.sendUpdatePassword);

        router.get('/user/verifyResetToken',confirmResetValidateionRules, controllers.login.confirmResetToken);

        router.get('/user/verifyInviterToken',confirmInviteValidationRules, controllers.registration.confirmInviteToken);

        router.post('/user/resetPassword',setNewPasswordRules, controllers.login.receiveUpdatePassword);

        router.get("/user/verifyEmailToken", confirmEmailValidationRules, controllers.confirmEmail.confirmEmail);

        router.post("/user/login", loginValidationRules, controllers.login.loginUser);

        router.get("/validate-token", tokenValidationRules, controllers.verifyToken.validateToken);

        router.get("/refresh-token", tokenValidationRules, controllers.refreshToken.refreshToken);
        
     
        // global express handler
        router.use((err, req, res, next) => {
            if (res.headersSent) {
                return next(err);
            } else {
                res.status(500).json(err.message || err);
            }

        });

        return router;
    }

}
