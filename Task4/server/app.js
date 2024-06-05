import express, { json, urlencoded } from "express";
import cors from 'cors'
import { User } from "./model/user.model.js";

const app = express()
app.use(cors())
app.use(json())
app.use(urlencoded())


app.post('/signUp',async (req,res)=>{
    const {username,password} = req.body;

    const existed = await User.findOne({username});
    if(existed){
        return res.status(400).json({status:400,success:false,message:"User exist with given email"});
    }

    const user = await User.create({username,password});

    if(!user){
        return res.status(400).json({status:400,success:false,message:"Error while adding user"});
    }

    return res.status(201)
    .json({
        success:true,
        message:"Registed Successfully"
    })
})

app.post('/login',async (req,res) => {
    const {username,password} = req.body;

    const user = await User.findOne({
        username
    })
    if (!user) {
        // throw new ApiError(404, "User doesn't exist");
        return res.status(400).json({status:400,success:false,message:"User doesn't exist"});
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if(!isPasswordValid){
        return res.status(400),json({status:400,message:"Incorrect Password"})
    }

    return res.status(200)
    .json({
        success:true,
        data:user
    })
})

export {app}