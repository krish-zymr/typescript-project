import{Schema ,model ,Document} from 'mongoose'

interface Iemploye extends Document{
    name: string;
    username: string;
    password: string;
    role : string
}

const employeSchema = new Schema<Iemploye>({
    name : {
        type : String ,
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

const Emoloye = model<Iemploye>("Employe", employeSchema);

export default Emoloye;

