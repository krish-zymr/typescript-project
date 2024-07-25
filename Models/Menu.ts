import {Schema , model , Document } from "mongoose";
import winston from "winston";
export const tasteEnum = ["Sweet","Spicy","Sour","Salty","Bitter","Umami"]

interface Imenu extends Document{
    name : String,
    price : Number,
    taste : String ,
    is_drink : Boolean,
    ingredients : [String],
    num_sales : Number
}

 
const menuSchema = new Schema<Imenu>({
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
        enum: tasteEnum
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
})

const Menu = model<Imenu>("Menu" , menuSchema)

export default Menu;