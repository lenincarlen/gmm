import { Schema, model} from "mongoose";
// const subuserchema = new Schema({
//     confirmed: {
//         type: Boolean,
//         default: false
//     },
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: "user",
//     }
//   });

const boardSchema = new Schema({

    Freshman_1: {
        confirmed: {
            type: Boolean,
            default: false
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "user",
            default: null
        }
    },
    Freshman_2: {
        confirmed: {
            type: Boolean,
            default: false
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "user",
            default: null
        }
    },
    Freshman_3: {
        confirmed: {
            type: Boolean,
            default: false
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "user",
            default: null
        }
    },
    Freshman_4: {
        confirmed: {
            type: Boolean,
            default: false
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "user",
            default: null
        }
    },
    Freshman_5: {
        confirmed: {
            type: Boolean,
            default: false
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "user",
            default: null
        }
    },
    Freshman_6: {
        confirmed: {
            type: Boolean,
            default: false
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "user",
            default: null
        }
    },
    Freshman_7: {
        confirmed: {
            type: Boolean,
            default: false
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "user",
            default: null
        }
    },
    Freshman_8: {
        confirmed: {
            type: Boolean,
            default: false
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "user",
            default: null
        }
    },
    Sophmore_1: {
        confirmed: {
            type: Boolean,
            default: false
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "user",
            default: null
        }
    },
    Sophmore_2: {
        confirmed: {
            type: Boolean,
            default: false
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "user",
            default: null
        }
    },
    Sophmore_3: {
        confirmed: {
            type: Boolean,
            default: false
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "user",
            default: null
        }
    },
    Sophmore_4: {
        confirmed: {
            type: Boolean,
            default: false
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "user",
            default: null
        }
    },
    junior_1: {
        confirmed: {
            type: Boolean,
            default: false
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "user",
            default: null
        }
    },
    junior_2: {
        confirmed: {
            type: Boolean,
            default: false
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "user",
            default: null
        }
    },
    senior_1: {
        confirmed: {
            type: Boolean,
            default: false
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "user",
            default: null
        }
    },
    fillcount: {
        type: Number,
    },
    leftClosed: {
        type: Boolean,
        default: false
    },
    rightClosed: {
        type: Boolean,
        default: false
    },
    treeClosed: {
        type: Boolean,
        default: false
    },
    treevalue: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
 });
// tslint:disable: variable-name
export const Board =  model("board", boardSchema);