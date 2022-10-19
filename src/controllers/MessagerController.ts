import { IMessagerController } from "../types";
import { Messager } from "../models/messager";

export class MessagerController implements IMessagerController {
    public async addUser(username : String, boardId: String){

        let messager = await Messager.findOne({username: username, boardId: boardId});
        if(messager) return false;
        await new Messager({username: username, boardId: boardId}).save();
        return true;
    }
    public async getUser(boardId: String){
        const messagers = await Messager.find({boardId: boardId}, '-_id username');
            return messagers;

    }
}