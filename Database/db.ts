
import mongoose, { Connection } from "mongoose";
export const connectMongo = async (mongoUrl: string) => {
    try {
        mongoose.connect(mongoUrl)

        const db : Connection = mongoose.connection;
    
        db.on("connected", () => {
            console.log("Connection Establisihed");
        })
        db.on("disconnected", () => {
            console.log("Connection did not Establisihed");
        })
        db.on("error", (error) => {
            console.log(`${error} : was occured`);
        })
    } catch (error) {
        console.log(error);
    }
}
