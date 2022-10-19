import { Schema, model} from "mongoose";

const notificationSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user",
    },
    level:{
        type: Number,
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

 });
// tslint:disable: variable-name
export const Notifications =  model("notification", notificationSchema);
