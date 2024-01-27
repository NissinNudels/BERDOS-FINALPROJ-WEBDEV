import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/mongoDB.js";
import importRoute from "./dataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Error.js";
import userRoute from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/OrderRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

//API 
app.use("/api/import", importRoute);
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID);

});

//ERROR HANDLER
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server running in port ${PORT}`));

