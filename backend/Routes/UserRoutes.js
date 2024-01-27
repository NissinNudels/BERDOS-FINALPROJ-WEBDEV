import express from "express";
import asyncHandler from "express-async-handler";
import User from "../Models/UserModel.js";
import generateToken from "../token/generateToken.js";
import { protect, admin } from "../Middleware/AuthMiddleware.js";

const userRoute = express.Router();

// LOGIN USER/CLIENT
userRoute.post("/login", asyncHandler(async (req, res) => {
    const {email,password} = req.body
    const user = await User.findOne({ email });

    // Check if email and password are provided
    if (!email || !password) {
        res.status(400);
        throw new Error("Email and Password are Required");
      }

    // Check if the user exists
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
            createdAt: user.createdAt,
        })
    }else{
        res.status(401);
        throw new Error("Invalid Email or Password");

    }
})
);

// PROFILE OF USER/CLIENT
userRoute.get("/profile", protect, asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if(user){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            createdAt: user.createdAt,

        })
    } else{
        res.status(404);
        throw new Error("Account Not Found");

    }
})
);

// UPDATES PROFILE OF USER/CLIENT
userRoute.put("/profile", protect, asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if(user){
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        
        if(req.body.password){
            user.password = req.body.password
        }
        const updateUser = await user.save();
        
        res.json({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            isAdmin: updateUser.isAdmin,
            createdAt: updateUser.createdAt,
            token: generateToken(updateUser._id),
        })

    } else{
        res.status(404);
        throw new Error("Account Not Found");

    }
})
);


// REGISTRATION FOR USER/CLIENT
userRoute.post("/", asyncHandler(async (req, res) => {
    const {name, email, password} = req.body
    const userExist = await User.findOne({ email });

    // Check if all required fields are provided
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Fill all required the form");
    }

    if(userExist){
        res.status(400)
        throw new Error("Account Already Exists")
    }

    const user = await User.create({
        name,
        email,
        password,
    });

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    }else{
        res.status(400)
        throw new Error("Invalid Account Data")
    }

})
);

// GET ALL USER ADMIN
userRoute.get( "/", protect, admin, asyncHandler(async (req, res) => {
      const user = await User.find({});
      res.json(user);
    })
  );

export default userRoute;