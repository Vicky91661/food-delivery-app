import User from "../models/userModel.js"
import Order from "../models/Order.js"
import passport from "passport"
import { Strategy } from "passport-google-oauth20"
import dotenv from "dotenv"
dotenv.config()

export const connectPassport = ()=>{
    passport.use(new Strategy({
        clientID:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        callbackURL:process.env.GOOGLE_REDIRECT_API
    }), async function(accessToken, refreshToken, profile,done){
        const user = await User.findOne({
            googleId:profile.id
        })

        if(!user){
            const newUser = await User.create({
                googleId:profile.id,
                name:profile.displayName,
                photo:profile.photo[0].value
            })

            done(null,newUser)
        }else{
            return done(null, user)
        }

    })

    passport.serializeUser((user,done)=>{
        done(null,user.id)
    })

    passport.deserializeUser(async(id,done)=>{
        const user = await User.findById(id);
        done(null,user)
    })


}

export const myProfile= (req,res)=>{
    try {
        return res.status(200).json({
            success:true,
            user:req.user
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
        })
    }
   
}

export const logout = (req,res)=>{
    try {
        req.session.destroy((error)=>{
            if(error){
                console.log("error while destroy session ",error)
                return res.status(400).json({
                    message:"something went wrong"
                })
            }

            res.clearCookie("connect.sid")
            return res.status(200).json({
                message:"Looged out"
            })
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message:"Not logged out"
        })
    }
}

export const adminAllUser = async (req,res)=>{
    try {
        const users = await User.find({})
        if(!user){
            return res.status(400).json({
                message:"there is not any user"
            })
        }
        return res.status(200).json({
            message:"",
            users:users
        })
    } catch (error) {
        return res.status(400).json({
            message:"something went wrong with database"
        })
    }
    

}

export const adminUser = async (req,res)=>{
    try {
        const id = req.params.id
        const user = await User.findOne({googleId:id})
        res.status(200).json({
            message:"this is user",
            user
        })

    } catch (error) {
        res.status(400).json({
            message:"something went wrong while fetching the user",
        })
    }

}

export const adminDeleteUser=async (req,res)=>{
    try {
        const id = req.params.id
        const user = await User.deleteOne({googleId:id})
        res.status(200).json({
            message:"this is user",
            user
        })

    } catch (error) {
        res.status(400).json({
            message:"something went wrong while fetching the user",
        })
    }
}

export const adminStats=async (req,res)=>{

    try {
        const userCount = await User.countDocuments();
        const orders = await Order.find({})
        if(orders){
            const preparingOrder = orders.filter((order)=>order.status==="Preparing")
            const shippedOrder = orders.filter((order)=>order.status==="Shipped") 
            const deliveredOrder = orders.filter((order)=>order.status==="Delivered")
            let totalIncome = orders.reduce((cum,i) =>cum + i.totalAmount,0);
            return res.status(200).json({
                success: true,
                usersCount,
                ordersCount: {
                  total: orders.length,
                  preparing: preparingOrder.length,
                  shipped: shippedOrder.length,
                  delivered: deliveredOrder.length,
                },
                totalIncome,
              });
        }else{
            return res.status(200).json({
                success: true,
                usersCount,
                ordersCount: {
                  total: 0,
                  preparing:0,
                  shipped: 0,
                  delivered:0,
                },
                totalIncome:0,
              });
        }
        
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"something went wrong "
        })
    }

}
