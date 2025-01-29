import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import useRouter from './routes/user_route.js'
dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
          console.log(err);
})

const app = express();

app.listen(3000,()=>{
    console.log("server running port 3000");
});

//test api route
// app.get('/', (req,res)=>{
//     res.json({
//         message: 'API is Working'
//     });
// })  instead of this

app.use("/api/user", useRouter);