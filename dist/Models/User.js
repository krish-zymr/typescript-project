"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name "]
    },
    language: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true,
        //unique : [true , "Unique Value Required"]
    },
    bio: {
        type: String
    },
    version: {
        type: Number,
        required: true
    },
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
