import dotenv from 'dotenv'
import app from './app.js'
import mongoose from 'mongoose'
dotenv.config({path:'./config.env'})
mongoose.connect(process.env.DATABASE_URL,{

}).then(()=>{
    console.log("Database connected successfully")
})

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`)
})