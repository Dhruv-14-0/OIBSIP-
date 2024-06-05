import mongoose from "mongoose";

const connectDb = async ()=>{
    try {
        const connection = await mongoose.connect("mongodb://localhost:27017/Auth");
        // console.log(connection.connection);
    } catch (error) {
        console.log('connection error',error);
        process.exit(1);
    }
}

export default connectDb;