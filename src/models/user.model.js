import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        requied : true,
    },
    email : {
        type : String,
        requied : true,
    },
    phone : {
        type : Number,
        requied : true,
    },
})

export const User = mongoose.model('User', userSchema)