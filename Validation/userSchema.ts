import yup ,{object , string , number} from "yup";

const userSchema = object({
    body : object({
        name:string().required("Name is required") ,
        language:string(),
        id:string(),
        bio:string(),
        version:number()
    }),
    params : object({
        id:number()
    })
})

export default userSchema;