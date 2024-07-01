import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"})) // data limit form any form or json type
app.use(express.urlencoded({extended: true, limit: "16kb"})) //data from the url
app.use(express.static("public")) //to store any images or files
app.use(cookieParser()) //to access cookies from brower and also set them

export default app;