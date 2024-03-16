import mongoose from "mongoose"

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    photo:{
        type:String
    },
    googleId:{
        type:String,
        require:true,
        unique:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const User = new mongoose.model("User",userSchema)

export default User;