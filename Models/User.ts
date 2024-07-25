import {Schema , model , Document} from "mongoose";

interface IUser extends Document{
    name :String ,
    language : String,
    id : String,
    bio :String ,
    version :Number,
}

const userSchema =  new Schema<IUser>({
    name : {
        type : String,
        required :[true , "Please enter a name "] 
    },
    language :{
        type : String,
        required : true 
    },
    id:{
        type : String,
        required : true,
        //unique : [true , "Unique Value Required"]
    },
    bio :{
        type : String
    },
    version:{
        type : Number,
        required : true 
    },
});

const User = model<IUser>("User", userSchema);


export default User;

