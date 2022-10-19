
import {Application, Request, Response} from "express";

export interface IServer {
    start();
    stop();
}

export interface IRoutes {
    routes(app: Application);
}

export interface IRealEstateController {
    getRealEstate(req: Request, res: Response);
    getRealEstates(req: Request, res: Response);
    getCountRealEstates(req: Request, res: Response);
    getCurCurrency(req: Request, res: Response);
    setAmenityData(req: Request, res: Response);
    setFavourite(req: Request, res: Response);
    getFavourite(req: Request, res: Response);
    getPropertyTypeCount(req: Request, res: Response);
    searchRealestate(req: Request, res: Response);
}

export interface IRegistrationController {
    registerUser(req: Request, res: Response);
    generateInviterToken(req: Request, res: Response);
    confirmInviteToken(req: Request, res: Response);
    createUser(req: Request, res: Response);
}

export interface IResendEmailVerificationController {
    resendEmail(req: Request, res: Response);
}

export interface IConfirmEmailAccountController {
    confirmEmail(req: Request, res: Response);
}

export interface ILoginController {
    loginUser(req: Request, res: Response);
    sendUpdatePassword(req: Request, res: Response);
    receiveUpdatePassword(req: Request, res: Response);
    confirmResetToken(req: Request, res: Response);
    getUserData(req: Request, res: Response);
    updateUserData(req: Request, res: Response);
    changePassword(req: Request, res: Response);
    getUsers(req: Request, res: Response);
}

export interface IVerifyTokenController {
    validateToken(req: Request, res: Response);
}

export interface IRefreshTokenController {
    refreshToken(req: Request, res: Response);
}

export interface IContactController {
    addContact(req: Request, res: Response);
    addSubscriber(req: Request, res: Response);
}
export interface IBoardController {
    createBoard(req: Request, res: Response);
    viewBoard(req: Request, res: Response);
    addToBoardlist(req: Request, res: Response);
    getActiveBoard(req: Request, res: Response);
    jointoBoard(req: Request, res: Response);
    removeUser(req: Request, res: Response);
    quitBoard(req: Request, res: Response);

}

export interface IMessageController {
    sendMessage(sender, receiver, text, boardId, isWelcomeMsg);
    getMessage(boardId);
    getMessageCount(req: Request, res: Response);
//    updatelastseen();
}

export interface IMessagerController {
    addUser(username : String, boardId: String);
    getUser(boardId: String);
}

export interface INotificationController{
    addNotification(req: Request, res: Response);
    deleteNotification(req: Request, res: Response);
    updateLastSeen(req: Request, res: Response);
    getNotification(req: Request, res: Response);
}