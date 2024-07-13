//application code handled by this file
import express from "express";
import {config} from 'dotenv';
import morgan from 'morgan';
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
config();//Connecting to mongoDB database securely

const app=express(); //creates a new instance for the application
app.use(cors({origin:"http://localhost:5173",credentials:true}));
app.use(express.json());//handles Json encoded data in the request body for the entire application
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(morgan("dev"));//gives info about HTTP requests-URL,type,time,size etc
app.use("/api/v1",appRouter);//The middleware function will be executed for any request whose path starts with "/api/v1",v1=version 1 

export default app; ///exporting the whole file to import it somewhere for better readability