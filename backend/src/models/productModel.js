import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    descripition:{
        type:String,
        require:true,
        
    },
    price:{
        type:Number,
        require:true,
        maxLength:6
    },
    rating:{
        type:Number,
        default:0
    },
    photo:[{
        path:{
            type:String
        }
    }],
    category:{
        type:String,
        enum:["indian","chinese","Italina","Beverages"],
        require:true,
    },
    type:{
        type:String,
        enum:["veg","non-veg"],
        require:true,
        default:"veg"
    },
    review:[{
        user:{
            type:mongoose.Schema.ObjectId,
            ref:"User",
            require:true
        },
        name:{
            trpe:String,
            require:true
        },
        rating:{
            type:Number,
            require:true,
        },
        comment:{
            type:String,
            require:true,
            maxLength:50
        }
    }],
    owner:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    } 
})

const Product =  new mongoose.model("Product",productSchema);

export default Product;