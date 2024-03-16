import Product from "../models/productModel.js";

// name,descripition,price,rating,photo,category,type,review,owner,createdAt

export const getAllProducts= async(req,res)=>{
    try {
        const allProducts =  await Product.find({});
        return res.status(200).json({
            allProducts
        })
    } catch (error) {
        return res.status(400).json({
            message:"something went wrong with database"
        })
    }
}
export const createProduct=async(req,res)=>{
    const {name,descripition,price,rating,photo,category,type,owner}=req.body;
    try {
        const product = await Product.create({
            name,
            descripition,
            price,
            rating,
            photo,
            category,
            type,
            owner
        })
        if(product){
            res.status(200).json({
                product
            })
        }else{
            res.status(400).json({
                message:"product not created"
            })
        }
    } catch (error) {
        res.status(400).json({
            message:"Something went wrong with database"
        })
    }
    
}
export const updateProduct=async (req,res)=>{
    
}
export const deleteProduct=async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.json(404).json({
                message:"Product not found"
            })
        }
        await product.remove();
        res.status(200).json({
            message:"Product deleted successfully"
        })
    } catch (error) {
        console.log("error while deleting product",error)
        return res.json(401).json({
            message:"something went wrong with database"
        })
    }
}
export const getProductDetails=async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id)
        if(product){
            return res.status(200).json({
                product
            })
        }
        return res.status(400).json({
            message:"there is not any product with this id"
        })
    } catch (error) {
        return res.status(400).json({
            message:"something went wrong with database"
        })
    }
    
}
export const createProductReview= async (req,res)=>{
    try {
        const product = await Product.findById(req.params.productId)
        const {user,name,rating,comment}=req.body;
        if(product){
            product.review.push({user,name,rating,comment})
            const newRating=0;
            product.review.forEach((item)=>{
                newRating+=item.rating;
            })
            product.rating=newRating/product.review.length;
            await product.save({ validateBeforeSave: false });
            return res.status(200).json({
                product
            })
        }
        return res.status(400).json({
            message:"there is not any product with this id"
        })
    } catch (error) {
        return res.status(400).json({
            message:"something went wrong with database"
        })
    }
}
export const getProductReviews=async(req,res)=>{
    try {
        const product = await Product.findById(req.params.productId)
        
        if(product){
            return res.status(200).json({
                reviews:product.review
            })
        }
        return res.status(400).json({
            message:"there is not any product with this id"
        })
    } catch (error) {
        return res.status(400).json({
            message:"something went wrong with database"
        })
    }
}
export const deleteReview=async(req,res)=>{
    try {
        const product =await Product.findById(req.params.productId)
        const index = req.params.reviewId;
        if(product){
            product.review.splice(index,1);
            await product.save({ validateBeforeSave: false });
            return res.status(200).json({
                reviews:product.review
            })
        }
        return res.status(400).json({
            message:"there is not any product with this id"
        })
    } catch (error) {
        return res.status(400).json({
            message:"something went wrong with database"
        })
    } 
    
}