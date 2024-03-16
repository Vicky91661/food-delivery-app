import express from "express";
import UserRouter from "./routers/userRouter.js";
import dotenv from 'dotenv';

const app = express()
app.use(express.json())

dotenv.config();
const port = process.env.PORT;

app.use("/user",UserRouter)
app.use("/user",UserRouter)

app.listen(port,()=>{
    console.log("app is running at the port",port)
})