import mongoose from "mongoose"

const paymentSchema =new mongoose.Schema({
    paymentId:{
        type:String,
        require:true
    },
    status: {
        type: String,
        enum:["pending","sucessful","unsucessful"],
        default:"panding",
        required: true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Payment = new mongoose.model("Payment",paymentSchema)

export default Payment;