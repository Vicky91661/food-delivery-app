import dotenv from 'dotenv'

dotenv.config()
const mongodb = process.env.MONGODB_URL
console.log(mongodb)