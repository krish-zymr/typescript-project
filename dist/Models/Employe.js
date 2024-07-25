"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const employeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name "]
    },
    username: {
        type: String,
        required: [true, "Please enter a username "],
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user', // Default role
        enum: ['user', 'admin', 'editor']
    } // Define roles
});
const Emoloye = (0, mongoose_1.model)("Employe", employeSchema);
exports.default = Emoloye;
