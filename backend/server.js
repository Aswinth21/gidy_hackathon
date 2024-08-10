import express from "express"
import dotenv from "dotenv"
import cloudinary from "cloudinary"

import authRoute from "./routes/auth.routes.js";
import userRoute from "./routes/user.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.urlencoded({extended: true}));
dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoute);
app.use("api/users", userRoute);



console.log(process.env.MONGO_URI);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
});