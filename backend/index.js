import express from "express"
import ImageKit from "imagekit";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();    //creating our app

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    // credentials: true,
  })
);

//initializing imagekit
const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
  });


//endpoints
app.get("/api/upload",(req,res)=>{
    const result = imagekit.getAuthenticationParameters();
  res.send(result);
})

//liten port number with call back function
app.listen(port, () => {
    console.log("Server running on " + port);
})
