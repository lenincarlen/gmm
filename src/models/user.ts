import { Schema, model} from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a name',
    },
    surname: {
        type: String,
        required: 'Enter a surname',
    },
    username: {
        type: String,
        required: 'Enter a username',
    },
    tel: {
        type: String,
        required: 'Enter a telephone number',    
    },
    referralToken: {
        type: String,
        default: "false"
    },
    email: {
        type: String,
        required: 'Enter a email-id',
    },

    password: {
        type: String,
        required: 'Enter a password for profile',
    },
    emailBoardActivity: {
        type: Boolean,
        default: true
    },
    emailCustomerSupport: {
        type: Boolean,
        default: true
    },
    emailMarketing: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    deletion: {
        type: Boolean,
        default: false
    },
    agree: {
        type: Boolean
    },
    twoFactorAuthSecret: {
        type: Boolean,
        default: false
    },
    invitedCount: {
        type: Number,
        default: 0
    },
    balanc: {
        type: Number,
        default: 0
    },
    level: {
        type: Number,
        default: 100
    },
    role: {
        type: Boolean,
        default: false
    }
 });
// tslint:disable: variable-name
export const User = model("Users", userSchema);
