import { UserModel } from "../Models/User.model.js";
import bcrypt, { hash } from 'bcrypt'

const signup = async (req, res) => {
    try {
        const {username, email, password}= req.body;
        const existUser = await UserModel.findOne({email})
        if(existUser){
            return res.status(400).json({success:false,message: 'User already exist'})
        }
        const newUser = new UserModel({username, email, password})
        hashPassword = await bcrypt.hash(password, 10)
        newUser.password = hashPassword
        await newUser.save()
        return res.status(201).json({success:true, message: 'User SignedUp successfully'})
    } catch (error) {
        return res.status(500).json({success:false, message: "Internal server error"})
    }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email})
        if(!user){
            return res.status(404).json({success:false, message: 'User not found'})
        }
        const isPassword =await bcrypt.comapare(password, user.password)
        if(!isPassword){
            return res.status(400).json({success:false, message: 'Invalid credentials'})
        }
        return res.status(200).json({success:true, message: 'User logged in successfully'})
    } catch (error) {
        return res.status(500).json({success:false, message: "Internal server error"})
    }
}

export {signup, login}