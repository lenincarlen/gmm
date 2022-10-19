import { Schema, model} from "mongoose";

const boardlistSchema = new Schema({
    userid: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user",
    },
    board: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "board",
    },
    confirmed:{
        type: Boolean,
        default: false
    },
    beforeJoin:{
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
 });

export const Boardlist =  model("boardlist", boardlistSchema);
