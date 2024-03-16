import express from "express";
import passport from "passport";
import dotenv from "dotenv"
dotenv.config()
const UserRouter = express.Router()

import { isAuthenticated,authorizeAdmin } from "../middleware/userAuth.js";
import { logout,myProfile,adminAllUser,adminUser,adminDeleteUser,adminStats } from "../controller/userController.js";


UserRouter.get("/googlelogin",passport.authenticate("google",{
    scope:["profile"]
}))

UserRouter.get("/login",passport.authenticate("google",{
    successRedirect:process.env.FRONTEND_URL,
}))

UserRouter.get("/me", isAuthenticated, myProfile);
UserRouter.get("/logout",logout)


//Routes for admin
UserRouter.get("/admin/users",isAuthenticated,authorizeAdmin,adminAllUser)
UserRouter.get("/admin/user/:id",isAuthenticated, authorizeAdmin,adminUser)
UserRouter.delete("/admin/user/:id",isAuthenticated, authorizeAdmin,adminDeleteUser)
UserRouter.get("/admin/stats",isAuthenticated, authorizeAdmin,adminStats)




export default UserRouter;