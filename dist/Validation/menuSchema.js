"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const Menu_1 = require("../Models/Menu");
const menuSchema = (0, yup_1.object)({
    body: (0, yup_1.object)({
        name: (0, yup_1.string)().required("Name is Required"),
        price: (0, yup_1.number)(),
        taste: (0, yup_1.mixed)().oneOf(Menu_1.tasteEnum, "Please enter a valid taste type"),
        is_drink: (0, yup_1.boolean)(),
        ingredients: (0, yup_1.lazy)(val => Array.isArray(val)
            ? (0, yup_1.array)().of((0, yup_1.string)())
            : (0, yup_1.string)()),
        num_sales: (0, yup_1.number)()
    }),
    params: (0, yup_1.object)({
        tasteType: (0, yup_1.mixed)().oneOf(Menu_1.tasteEnum, "Please enter a valid taste type")
    })
});
exports.default = menuSchema;
