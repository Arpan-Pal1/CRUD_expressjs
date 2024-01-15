import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/cruddb')
    } catch (error) {
        console.log(`DATABASE CONNECTION FAILED ${error}`);
    }
}

export default connectDb