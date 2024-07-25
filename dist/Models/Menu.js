"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasteEnum = void 0;
const mongoose_1 = require("mongoose");
exports.tasteEnum = ["Sweet", "Spicy", "Sour", "Salty", "Bitter", "Umami"];
const menuSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"],
    },
    price: {
        type: Number,
        // required: true
    },
    taste: {
        type: String,
        enum: exports.tasteEnum
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type: [String],
        default: []
    },
    num_sales: {
        type: Number,
        default: 0
    }
});
const Menu = (0, mongoose_1.model)("Menu", menuSchema);
exports.default = Menu;
