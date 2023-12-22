import mongoose from "mongoose";

let isConnected = false; //track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('Connected to database');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"sharePromot",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;

        console.log('Mongodb connection established')
    } catch (error) {
        console.log(error)
    }
}