import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModels.js";
import bcrypt from 'bcryptjs';


const createUser = asyncHandler(async(req, res) => {
    try{
        const {name, email, phone, password} = req.body;
        if(!name || !email || !phone || !password){
            res.status(400).json({
                message:'please fill all the fields'
            })
        }
        //check for exiting user
        const oldUser = await User.findOne({email})
        if(oldUser){
            res.status(400).json({
                message:"user already exists, please login instead"
            })
        }

        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)



        //register new user
        const newUser = User({name, email, phone, password:hashedPassword});
        try{
            await newUser.save();
            res.status(201).json({
                message:'User created successfully',
                data:newUser,
            
            })
        }catch(error){
            throw new Error(error.message)
        }

    }catch(error){
        console.log(error)
        res.status(500).json({
            message:"internal server error"
        })
    }
})

export {
    createUser
}