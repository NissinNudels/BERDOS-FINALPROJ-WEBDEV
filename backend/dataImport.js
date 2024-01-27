import express from "express";
import User from "./Models/UserModel.js";
import users from "./data/users.js";
import Product from "./Models/ProductModel.js";
import products from "./data/Products.js";
import asyncHandler from "express-async-handler";

const importRoute = express.Router();

// POST route for importing users
importRoute.post("/user", asyncHandler(async (req, res) => {
    
        await User.deleteMany({}); // to remove all document in collection and insert new
        const importUser = await User.insertMany(users);
        res.send({ importUser });
})

);

// POST route for importing products
importRoute.post("/products", asyncHandler (async (req, res) => {
        await Product.deleteMany({}); // to remove all document in collection and insert new
        const importProduct = await Product.insertMany(products);
        res.send({ importProduct });
    
})

);


export default importRoute;

