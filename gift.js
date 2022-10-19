/*
 Navicat Premium Data Transfer

 Source Server         : afrikinvest
 Source Server Type    : MongoDB
 Source Server Version : 40028 (4.0.28)
 Source Host           : localhost:27017
 Source Schema         : gift

 Target Server Type    : MongoDB
 Target Server Version : 40028 (4.0.28)
 File Encoding         : 65001

 Date: 12/10/2022 07:43:18
*/


// ----------------------------
// Collection structure for boardlists
// ----------------------------
db.getCollection("boardlists").drop();
db.createCollection("boardlists");

// ----------------------------
// Documents of boardlists
// ----------------------------
db.getCollection("boardlists").insert([ {
    _id: ObjectId("633e937b0501c871ccddd467"),
    confirmed: true,
    createdAt: ISODate("2022-10-06T08:36:11.433Z"),
    userid: ObjectId("6337113db3a8e93b248523c4"),
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    __v: NumberInt("0"),
    beforeJoin: true
} ]);
db.getCollection("boardlists").insert([ {
    _id: ObjectId("633e93820501c871ccddd468"),
    confirmed: true,
    createdAt: ISODate("2022-10-06T08:36:18.312Z"),
    userid: ObjectId("633718220364ba8cfcf084ff"),
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    __v: NumberInt("0"),
    beforeJoin: true
} ]);
db.getCollection("boardlists").insert([ {
    _id: ObjectId("633e93860501c871ccddd469"),
    confirmed: true,
    createdAt: ISODate("2022-10-06T08:36:22.732Z"),
    userid: ObjectId("63375ab1c1d0fa6f00b2dd1d"),
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    __v: NumberInt("0"),
    beforeJoin: true
} ]);
db.getCollection("boardlists").insert([ {
    _id: ObjectId("633e938b0501c871ccddd46a"),
    confirmed: true,
    createdAt: ISODate("2022-10-06T08:36:27.314Z"),
    userid: ObjectId("633c563ca9bd7713cc8cc865"),
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    __v: NumberInt("0"),
    beforeJoin: true
} ]);
db.getCollection("boardlists").insert([ {
    _id: ObjectId("633e938b0501c871ccddd46b"),
    confirmed: true,
    createdAt: ISODate("2022-10-06T08:36:27.314Z"),
    userid: ObjectId("634117d5cdbcca4e105b30eb"),
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    __v: NumberInt("0"),
    beforeJoin: true
} ]);
db.getCollection("boardlists").insert([ {
    _id: ObjectId("6345ab3d3362096e6c36137d"),
    confirmed: false,
    beforeJoin: false,
    userid: ObjectId("6345ab2f3362096e6c36137a"),
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    createdAt: ISODate("2022-10-11T17:43:25.205Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("boardlists").insert([ {
    _id: ObjectId("6345ad7c3362096e6c361382"),
    confirmed: true,
    beforeJoin: true,
    userid: ObjectId("6345ad713362096e6c36137f"),
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    createdAt: ISODate("2022-10-11T17:53:00.871Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for boards
// ----------------------------
db.getCollection("boards").drop();
db.createCollection("boards");

// ----------------------------
// Documents of boards
// ----------------------------
db.getCollection("boards").insert([ {
    _id: ObjectId("633e87950d6b4f18882b4ebc"),
    "Freshman_1": {
        confirmed: true,
        user: ObjectId("634117d5cdbcca4e105b30eb")
    },
    "Freshman_2": {
        confirmed: true,
        user: ObjectId("6345ad713362096e6c36137f")
    },
    "Freshman_3": {
        confirmed: false,
        user: null
    },
    "Freshman_4": {
        confirmed: false,
        user: null
    },
    "Freshman_5": {
        confirmed: false,
        user: null
    },
    "Freshman_6": {
        confirmed: false,
        user: null
    },
    "Freshman_7": {
        confirmed: false,
        user: null
    },
    "Freshman_8": {
        confirmed: false,
        user: null
    },
    "Sophmore_1": {
        confirmed: true,
        user: ObjectId("633c563ca9bd7713cc8cc865")
    },
    "Sophmore_2": {
        confirmed: false,
        user: null
    },
    "Sophmore_3": {
        confirmed: false,
        user: null
    },
    "Sophmore_4": {
        confirmed: false,
        user: null
    },
    "junior_1": {
        confirmed: true,
        user: ObjectId("633718220364ba8cfcf084ff")
    },
    "junior_2": {
        confirmed: true,
        user: ObjectId("63375ab1c1d0fa6f00b2dd1d")
    },
    "senior_1": {
        confirmed: true,
        user: ObjectId("6337113db3a8e93b248523c4")
    },
    leftClosed: false,
    rightClosed: false,
    treeClosed: false,
    createdAt: ISODate("2022-10-06T07:45:25.472Z"),
    fillcount: NumberInt("4"),
    treevalue: NumberInt("100"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for messagers
// ----------------------------
db.getCollection("messagers").drop();
db.createCollection("messagers");

// ----------------------------
// Documents of messagers
// ----------------------------
db.getCollection("messagers").insert([ {
    _id: ObjectId("6343027ad01ce15b7402b7b2"),
    username: "789",
    boardId: "633e87950d6b4f18882b4ebc",
    createdAt: ISODate("2022-10-09T17:18:50.364Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messagers").insert([ {
    _id: ObjectId("6343027ad01ce15b7402b7b3"),
    username: "Sniper",
    boardId: "633e87950d6b4f18882b4ebc",
    createdAt: ISODate("2022-10-09T17:18:50.364Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messagers").insert([ {
    _id: ObjectId("6343027ad01ce15b7402b7b4"),
    username: "Lenin",
    boardId: "633e87950d6b4f18882b4ebc",
    createdAt: ISODate("2022-10-09T17:18:50.364Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messagers").insert([ {
    _id: ObjectId("6343027ad01ce15b7402b7b5"),
    username: "naruto",
    boardId: "633e87950d6b4f18882b4ebc",
    createdAt: ISODate("2022-10-09T17:18:50.364Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messagers").insert([ {
    _id: ObjectId("63442aad8aefd060483f2504"),
    username: "aaaaa",
    boardId: "633e87950d6b4f18882b4ebc",
    createdAt: ISODate("2022-10-10T14:22:37.523Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messagers").insert([ {
    _id: ObjectId("6345adae3362096e6c361383"),
    username: "newcomer",
    boardId: "633e87950d6b4f18882b4ebc",
    createdAt: ISODate("2022-10-11T17:53:50.308Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for messages
// ----------------------------
db.getCollection("messages").drop();
db.createCollection("messages");

// ----------------------------
// Documents of messages
// ----------------------------
db.getCollection("messages").insert([ {
    _id: ObjectId("634318371b175843a403a50e"),
    isWelcomeMsg: false,
    username: "789",
    inWhisper: null,
    message: "hello",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T18:51:35.044Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("6343184c1b175843a403a50f"),
    isWelcomeMsg: false,
    username: "789",
    inWhisper: "Sniper",
    message: "hello Galbi",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T18:51:56.579Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("634318751b175843a403a510"),
    isWelcomeMsg: false,
    username: "Sniper",
    inWhisper: "naruto",
    message: "gjhghk",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T18:52:37.269Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("634318871b175843a403a511"),
    isWelcomeMsg: false,
    username: "Sniper",
    inWhisper: null,
    message: "jhglgklh",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T18:52:55.076Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("63431976546d8b066069d8ac"),
    isWelcomeMsg: false,
    username: "789",
    inWhisper: null,
    message: "hello again",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T18:56:54.597Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("634319f941026c61f8483f76"),
    isWelcomeMsg: false,
    username: "789",
    inWhisper: null,
    message: "asdf",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T18:59:05.98Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("63431b5b7a43374d78622ff6"),
    isWelcomeMsg: false,
    username: "Sniper",
    inWhisper: null,
    message: "fdsg",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T19:04:59.483Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("63431c4c64da586114ae335c"),
    isWelcomeMsg: false,
    username: "Sniper",
    inWhisper: null,
    message: "gfdhgd",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T19:09:00.09Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("63431c7c64da586114ae335d"),
    isWelcomeMsg: false,
    username: "789",
    inWhisper: null,
    message: "hey",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T19:09:48.98Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("63431c8064da586114ae335e"),
    isWelcomeMsg: false,
    username: "789",
    inWhisper: null,
    message: "you are fool",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T19:09:52.492Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("63431ca464da586114ae335f"),
    isWelcomeMsg: false,
    username: "789",
    inWhisper: null,
    message: "you are stupid",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T19:10:28.499Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("63431d1f51a14c608c2001bc"),
    isWelcomeMsg: false,
    username: "Sniper",
    inWhisper: null,
    message: "hfgjh",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T19:12:31.714Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("63431de2a0b8041f50a043ff"),
    isWelcomeMsg: false,
    username: "789",
    inWhisper: null,
    message: "www",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T19:15:46.14Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("63431de3a0b8041f50a04400"),
    isWelcomeMsg: false,
    username: "Sniper",
    inWhisper: null,
    message: "fgdsg",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T19:15:47.875Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("63431de8a0b8041f50a04401"),
    isWelcomeMsg: false,
    username: "789",
    inWhisper: null,
    message: "asdfasdf",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T19:15:52.179Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("63431e33a0b8041f50a04402"),
    isWelcomeMsg: false,
    username: "789",
    inWhisper: "Sniper",
    message: "hello",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T19:17:07.436Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("63431e45a0b8041f50a04403"),
    isWelcomeMsg: false,
    username: "Sniper",
    inWhisper: "789",
    message: "dgfds",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T19:17:25.62Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("63431e4ea0b8041f50a04404"),
    isWelcomeMsg: false,
    username: "Sniper",
    inWhisper: "Lenin",
    message: "fdhgfdh",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T19:17:34.42Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("63431e5ca0b8041f50a04405"),
    isWelcomeMsg: false,
    username: "Sniper",
    inWhisper: "naruto",
    message: "gfdgs",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T19:17:48.02Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("63431f01a0b8041f50a04406"),
    isWelcomeMsg: false,
    username: "789",
    inWhisper: "Lenin",
    message: "asdfasdf",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T19:20:33.403Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("63431f43a0b8041f50a04407"),
    isWelcomeMsg: false,
    username: "789",
    inWhisper: "Lenin",
    message: "asdfasdf",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T19:21:39.54Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("63431f4ba0b8041f50a04408"),
    isWelcomeMsg: false,
    username: "Sniper",
    inWhisper: "789",
    message: "fgfd",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T19:21:47.543Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("63431f50a0b8041f50a04409"),
    isWelcomeMsg: false,
    username: "Sniper",
    inWhisper: "Lenin",
    message: "gfdgd",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T19:21:52.296Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("63431fbaa0b8041f50a0440a"),
    isWelcomeMsg: false,
    username: "Sniper",
    inWhisper: null,
    message: "Lenin",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T19:23:38.873Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("63431fbda0b8041f50a0440b"),
    isWelcomeMsg: false,
    username: "Sniper",
    inWhisper: null,
    message: "how are you",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-09T19:23:41.641Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("634599eb3362096e6c361373"),
    isWelcomeMsg: false,
    username: "aaaaa",
    inWhisper: "Sniper",
    message: "hello, sir. thanks for your confirming.",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-11T16:29:31.901Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("63459a003362096e6c361374"),
    isWelcomeMsg: false,
    username: "Sniper",
    inWhisper: "aaaaa",
    message: "yeah, you are welcome. it's my pleasure.",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-11T16:29:52.788Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("63459a0d3362096e6c361375"),
    isWelcomeMsg: false,
    username: "aaaaa",
    inWhisper: null,
    message: "Hello, everyone.",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-11T16:30:05.366Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("6345ae113362096e6c361384"),
    isWelcomeMsg: false,
    username: "Sniper",
    inWhisper: "newcomer",
    message: "Hello, newcomer. Welcome.",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-11T17:55:29.606Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("6345ae253362096e6c361385"),
    isWelcomeMsg: false,
    username: "newcomer",
    inWhisper: "Sniper",
    message: "Thanks. Sniper",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-11T17:55:49.886Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("6345ae3d3362096e6c361386"),
    isWelcomeMsg: false,
    username: "Sniper",
    inWhisper: null,
    message: "Hi, everyone.",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-11T17:56:13.086Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("6346cd05a282bb51200dcb20"),
    isWelcomeMsg: false,
    username: "789",
    inWhisper: null,
    message: "hello everyone. welcome",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-12T14:19:49.232Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("messages").insert([ {
    _id: ObjectId("6346cd11a282bb51200dcb21"),
    isWelcomeMsg: false,
    username: "789",
    inWhisper: null,
    message: "hello",
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    date: ISODate("2022-10-12T14:20:01.94Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for notifications
// ----------------------------
db.getCollection("notifications").drop();
db.createCollection("notifications");

// ----------------------------
// Documents of notifications
// ----------------------------
db.getCollection("notifications").insert([ {
    _id: ObjectId("634464495f46b4494cd14b3e"),
    message: "hello",
    user: ObjectId("633718220364ba8cfcf084ff"),
    level: NumberInt("100"),
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    __v: NumberInt("0")
} ]);
db.getCollection("notifications").insert([ {
    _id: ObjectId("634464595f46b4494cd14b3f"),
    message: "hello",
    user: ObjectId("63375ab1c1d0fa6f00b2dd1d"),
    level: NumberInt("100"),
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    __v: NumberInt("0")
} ]);
db.getCollection("notifications").insert([ {
    _id: ObjectId("634464615f46b4494cd14b40"),
    message: "hello",
    user: ObjectId("633c563ca9bd7713cc8cc865"),
    level: NumberInt("100"),
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    __v: NumberInt("0")
} ]);
db.getCollection("notifications").insert([ {
    _id: ObjectId("634464675f46b4494cd14b41"),
    message: "hello",
    user: ObjectId("634117d5cdbcca4e105b30eb"),
    level: NumberInt("100"),
    board: ObjectId("633e87950d6b4f18882b4ebc"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for temporary_users
// ----------------------------
db.getCollection("temporary_users").drop();
db.createCollection("temporary_users");
db.getCollection("temporary_users").createIndex({
    createdAt: NumberInt("1")
}, {
    name: "createdAt_1",
    background: true,
    expireAfterSeconds: NumberInt("86400")
});

// ----------------------------
// Documents of temporary_users
// ----------------------------

// ----------------------------
// Collection structure for tokens
// ----------------------------
db.getCollection("tokens").drop();
db.createCollection("tokens");
db.getCollection("tokens").createIndex({
    createdAt: NumberInt("1")
}, {
    name: "createdAt_1",
    background: true,
    expireAfterSeconds: NumberInt("3600")
});

// ----------------------------
// Documents of tokens
// ----------------------------

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("6337113db3a8e93b248523c4"),
    referralToken: "false",
    deletion: false,
    twoFactorAuthSecret: false,
    invitedCount: NumberInt("2"),
    balanc: NumberInt("0"),
    level: NumberInt("100"),
    createdAt: ISODate("2022-09-30T15:54:37.165Z"),
    name: "Thomas",
    email: "top.developer327@gmail.com",
    tel: "2745654654654",
    username: "Sniper",
    surname: "Johnson",
    password: "$2a$08$qHpaA./GyEjiP21TN.U9LuxlqeNzgqLLYwtRkEogmeaviCpIHkNKy",
    agree: true,
    emailBoardActivity: true,
    emailCustomerSupport: true,
    emailMarketing: true,
    role: true,
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("633718220364ba8cfcf084ff"),
    referralToken: "6337113db3a8e93b248523c4",
    deletion: false,
    twoFactorAuthSecret: false,
    invitedCount: NumberInt("2"),
    balanc: NumberInt("0"),
    level: NumberInt("100"),
    createdAt: ISODate("2022-09-30T16:24:02.571Z"),
    name: "123",
    email: "a@b.com",
    tel: "27123123123",
    username: "789",
    surname: "456",
    password: "$2a$08$gu85g2iPWk6z7atjtSn/EOhqEnqJNK.MRX8paO7FOnNONRMDR3HPG",
    agree: true,
    emailBoardActivity: true,
    emailCustomerSupport: true,
    emailMarketing: true,
    __v: NumberInt("0"),
    role: false
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("63375ab1c1d0fa6f00b2dd1d"),
    referralToken: "6337113db3a8e93b248523c4",
    deletion: false,
    twoFactorAuthSecret: false,
    invitedCount: NumberInt("0"),
    balanc: NumberInt("0"),
    level: NumberInt("100"),
    createdAt: ISODate("2022-09-30T21:08:01.593Z"),
    name: "Lenin",
    email: "leninmejiacarlen@gmail.com",
    tel: "18092656979",
    username: "Lenin",
    surname: "Mejia",
    password: "$2a$08$Gdm3Txos0wPfNo0jymuTIe2kx.EcWyj/2xeJeU2HbRtrluN4a5OTm",
    agree: true,
    emailBoardActivity: true,
    emailCustomerSupport: true,
    emailMarketing: true,
    __v: NumberInt("0"),
    role: false
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("633c563ca9bd7713cc8cc865"),
    referralToken: "633718220364ba8cfcf084ff",
    deletion: false,
    twoFactorAuthSecret: false,
    invitedCount: NumberInt("0"),
    balanc: NumberInt("0"),
    level: NumberInt("100"),
    createdAt: ISODate("2022-10-04T15:50:20.348Z"),
    name: "naruto",
    surname: "uzmaki",
    username: "naruto",
    tel: "4465436434",
    email: "na@uz.com",
    password: "$2a$08$D8TDcE83gaJF9cJ8zH7BAOay0v0sZVG/eFruaD12792u.VHsbeghe",
    __v: NumberInt("0"),
    agree: true,
    emailBoardActivity: true,
    emailCustomerSupport: true,
    emailMarketing: true,
    role: false
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("634117d5cdbcca4e105b30eb"),
    referralToken: "633718220364ba8cfcf084ff",
    emailBoardActivity: true,
    emailCustomerSupport: true,
    emailMarketing: true,
    deletion: false,
    twoFactorAuthSecret: false,
    invitedCount: NumberInt("2"),
    balanc: NumberInt("0"),
    level: NumberInt("100"),
    createdAt: ISODate("2022-10-08T06:25:25.391Z"),
    name: "aaa",
    email: "1@123.com",
    tel: "27123123123",
    username: "aaaaa",
    surname: "bbb",
    password: "$2a$08$c22hcGNkSsrLouLEQgxpleIVCweY4wc0Ue/uwFhYRDsy.Yfcz0jWy",
    agree: true,
    __v: NumberInt("0"),
    role: false
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("6345ad713362096e6c36137f"),
    referralToken: "634117d5cdbcca4e105b30eb",
    emailBoardActivity: true,
    emailCustomerSupport: true,
    emailMarketing: true,
    deletion: false,
    twoFactorAuthSecret: false,
    invitedCount: NumberInt("0"),
    balanc: NumberInt("0"),
    level: NumberInt("100"),
    role: false,
    createdAt: ISODate("2022-10-11T17:52:49.445Z"),
    name: "new",
    email: "newcomer@gmail.com",
    tel: "27123123123",
    username: "newcomer",
    surname: "comer",
    password: "$2a$08$mVWVAx6WEOMBC2I0x48OreLhrdAYJTUDUkJ/zGkbHvA3EagU3i6j2",
    agree: true,
    __v: NumberInt("0")
} ]);
