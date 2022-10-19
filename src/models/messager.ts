import { Schema, model} from "mongoose";

const messagerSchema = new Schema({
    boardId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const Messager = model("messager", messagerSchema);