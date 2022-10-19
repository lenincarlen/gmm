import { RegistrationController } from "./RegistrationController";
import { ResendEmailVerificationController } from "./ResendEmailVerificationController";
import { ConfirmEmailAccountController } from "./ConfirmEmailAccountController";
import { LoginController } from "./LoginController";
import { VerifyTokenController } from "./VerifyTokenController";
import {RefreshTokenController} from "./RefreshTokenController";
import { BoardController } from "./BoardController";
import { MessagerController } from "./MessagerController";
import { MessageController } from "./MessageController";
import { NotificationController } from "./NotificationController";
export const controllers = {
    registration : new RegistrationController(),
    resendEmail: new ResendEmailVerificationController(),
    confirmEmail: new ConfirmEmailAccountController(),
    login: new LoginController(),
    verifyToken : new VerifyTokenController(),
    refreshToken: new RefreshTokenController(),
    board: new BoardController(),
    messager: new MessagerController,   
    message: new MessageController,
    notification: new NotificationController
} ;
