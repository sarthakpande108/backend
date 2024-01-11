import mongoose from 'mongoose';
import {DB_NAME} from "../constant.js";

const connectDB=async()=>{
    try{
     const ConnectionInstance=await mongoose.connect(
        `${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !!  DB host:${ConnectionInstance.connection.host}`)
    }
catch(error){
    console.log("error in connceting to Db",error);
    process.exit(1)
};}

export default connectDB;