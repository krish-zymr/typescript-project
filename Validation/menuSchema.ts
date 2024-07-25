
import yup, { object, string, number, array, boolean, lazy ,mixed} from "yup";
import { tasteEnum } from "../Models/Menu";
const menuSchema = object({

    body: object({
        name: string().required("Name is Required"),
        price: number(),
        taste: mixed().oneOf(tasteEnum,"Please enter a valid taste type"),
        is_drink: boolean(),
        ingredients: lazy(val => Array.isArray(val)
            ? array().of(string())
            : string()),
        num_sales: number()
    }),
    params: object({
        tasteType :mixed().oneOf(tasteEnum,"Please enter a valid taste type")
    })
})

export default menuSchema;