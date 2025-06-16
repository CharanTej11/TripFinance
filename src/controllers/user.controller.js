import User from "../models/User.model.js";
import jwt from "jsonwebtoken" 
import asyncHandler from "../utils/asyncHandler.js";
import  ApiError  from "../utils/ApiError.js";
import  ApiResponse  from "../utils/ApiResponse.js";
import {hashPassword,verifyPassword} from "../utils/hashPassword.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password,confirmPassword, firstName, lastName, phone } = req.body;
  // Check if user already exists
  if(
    [username, email, password,confirmPassword, firstName, lastName, phone].some((field)=>{
      return field?.trim() === ""
    })
  ){
    throw new ApiError(400,"all fields are required")
  }
  if (password !== confirmPassword) {
    throw new ApiError(400,"passwords do not match")
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }
  let newPassword = await hashPassword(password);
  // Create new user
  const newUser = new User({
    username, email, password:newPassword, firstName, lastName, phone
  });

  try {
    await newUser.save();
    res.status(200).json(
      new ApiResponse(200,newUser,"data of user")
  );
  } catch (error) {
    console.log(error)
    throw new ApiError(500,"something went wrong while registering the user")
  }
})

const loginUser = asyncHandler(async (req, res) => {
  const {  email, password } = req.body;
  // Check if user already exists
  if(
    [ email, password ].some((field)=>{
      return field?.trim() === ""
    })
  ){
    throw new ApiError(400,"all fields are required")
  }
  let token=""
  try {
    const user = await User.findOne({ email });
    if (user === null) {
      return res.status(400).json(
      new ApiResponse(403,{},"invalid username or password")
     );
    }
    
    if(verifyPassword(password,user.password)){
      token = jwt.sign({
        id:user._id
      }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
      res.status(200).json(
      new ApiResponse(200,{token:token},null)
     );
    }
    else{
      res.status(400).json(
      new ApiResponse(403,{},"invalid username or password")
     );
    }
  } catch (error) {
    console.log(error)
    throw new ApiError(500,"something went wrong while logging in ");
  }
})

export { registerUser , loginUser };