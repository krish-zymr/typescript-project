import yup ,{object , string , number} from "yup";

const employeSchema = object({
    body : object({
        name: string(),
        username: string(),
        password: string(),
        role : string()
    }),
    params : object({
        id:number()
    })
})

export default employeSchema;