const UserModel = require("../models/UserModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser=async(req,res)=>{
    // Registration logic here
    const {name,email,password}=req.body;
    if(!name || !email || !password){
        return res.status(400).json({message:"All fields are required"});
    }
    const user=await UserModel.findOne({email})
    if(user){
        return res.status(400).json({message:"User already exists"});
    }
    const hashedPassword=await bcrypt.hash(String(password),10);
    const profileImage=req.file? req.file.path : null;
    const newUser=new UserModel({
        ...req.body,
        password:hashedPassword,
        profileImage
    });
    await newUser.save();
    res.status(201).json({
        message:"User registered successfully",
        user:newUser
    })

}
const loginUser=async(req,res)=>{
    // Login logic here
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({message:"All fields are required"});
    }
    const user=await UserModel.findOne({email});
    if(!user){
        return res.status(400).json({message:"User does not exist"});
    }
    const isMatch=await bcrypt.compare(String(password),user.password);
    if(!isMatch){
        return res.status(400).json({message:"Invalid credentials"});
    }
    const jwtToken=jwt.sign({_id:user._id,role:user.role,name:user.name,image:user.profileImage},process.env.JWT_SECRET,{expiresIn:'1d'});
    res.status(200).json({
        success:true,
        message:"User logged in successfully",
        jwtToken,
        user:{
            _id:user._id,
            name:user.name,
            email:user.email,
            role:user.role,
            profileImage:user.profileImage
        }

    })
}

    const getSingleUser=async(req,res)=>{
        const {id}=req.params;
    const user=await UserModel.findById(id);
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        res.status(200).json({
            success:true,
            message:"User fetched successfully",
            user:{
                _id:user._id,
                name:user.name,
                email:user.email,
                role:user.role,
                profileImage:user.profileImage
            }
        });

    }
    const deleteUser=async(req,res)=>{
        const {id}=req.params;
        const user=await UserModel.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        res.status(200).json({
            success:true,
            message:"User deleted successfully",

        })
    }

module.exports={registerUser,loginUser, deleteUser,getSingleUser}