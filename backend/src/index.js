import express from "express";
import authRoutes from "./routes/auth.route.js"
import dotenv from 'dotenv'
import { connectDB } from "./lib/db.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT
app.use(bodyParser.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes)

app.listen(PORT, ()=>{
    console.log("Server running on port 5001"); 
    connectDB();
})