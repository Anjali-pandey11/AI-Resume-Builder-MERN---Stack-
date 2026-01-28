import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// import comparePassword from "../models/User.js";


const generateToken = (userId) => {
  const token = jwt.sign({userId},process.env.JWT_SECRET, {expiresIn: '7d'});
  return token;
}

// controller for user registration
// POST: /api/users/register
export const registerUser = async (req,res) => {
   try {
    const {name, email, password} = req.body;

    // check if required fields are present
    if(!name || !email || !password){
      return res.status(400).json({message:'Missing required fields'})
    }

    // check if user already exists
    const user = await User.findOne({email})
    if(user){
      return res.status(400).json({message:'User already exists'})
    }

    // create new user
    const hashedPassword = await bcrypt.hash(password,10);

    const newUser = await User.create({
      name,
      email,
      password:hashedPassword
    })

    // return success message
    const token = generateToken(newUser._id);
    newUser.password = undefined;

    return res.status(201).json({
      message: 'User created successfully', 
      token,
      user:newUser
    })

   } catch (error) {
     return res.status(400).json({message:error.message})
   }
}

// conroller for user login
// POST: /api/users/login

export const loginUser = async(req,res) => {
  try {
     const {email, password} = req.body;

     const user = await User.findOne({email});
     
     if(!user){
       res.status(400).json({message:'iInvalid email or password'})
     }

     // check user password
     if(!user.comparePassword(password)){
      return res.status(400).json({message:'Invalid email or password'})
     }

     // return success message
     const token = generateToken(user._id);
     user.password = undefined;

      return res.status(201).json({
      message: 'User login successfully', 
      token,
      user
    })

  } catch (error) {
    return res.status(400).json({message: error.message});
  }
}


