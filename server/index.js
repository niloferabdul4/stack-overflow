import express, { urlencoded } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import UserRoutes from './routes/users.js'

const app=express()                 // create a express server

app.use(express.json({limit:'30mb',extended:true}))           //send response as json with a limit and can be extended if needed
app.use(urlencoded({limit:'30mb',extended:true}))
app.use(cors())


//create API

app.get(('/'),(req,res)=>{
    res.send("This is a stack overflow clone API")
})


// routes

app.use('/user',UserRoutes)                            // if the route is '/user' we r going to use UserRoutes as a middleware


//create PORT

const PORT=process.env.PORT || 5000

const CONNECTION_URL='mongodb+srv://admin:admin@stack-overflow-clone.pubrk73.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_URL)
.then(()=>app.listen(PORT,()=>{console.log(`server running on ${PORT}`)}))
.catch((error)=>console.log(error.message))