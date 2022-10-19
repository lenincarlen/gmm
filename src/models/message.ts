import { Schema, model} from "mongoose";

const messageSchema = new Schema({
    username: {
        type: String,
    },
    inWhisper: {
        type: String,
    },
    message: {
        type: String,
        required: true,
    },
    board: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "board",
    },
    date: {
        type: Date,
        default: Date.now,
    },
    receivetime: {
        type: Date,
    },
    isWelcomeMsg:{
        type: Boolean,
        default: false
    }

 });
// tslint:disable: variable-name
export const Message =  model("message", messageSchema);
