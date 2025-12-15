import express from "express";
import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
import { nanoid } from "nanoid";
import urlExist from "url-exist";
import URL from "./models/urlModel.js"
import { log } from "console";
// import { fileURLToPath } from "url";
// import staticRoute from "./routes/staticRoute.js";

// const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve();

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(express.static(__dirname, "/views")); // serve static files



// use router
// app.use("/", staticRoute);

app.get("/", (req,res)=> {
    res.sendFile(__dirname + "/views/index.html");
});

app.post("/link", validate, (req,res)=> {
    const { URL } = req.body;

    //generate unique ID
    let id = nanoid(7);
    let newURL = new URL({ URL, id});

    try {
        newURL.save();
    } catch {
        res.send("An error was encountered! Please try again.")
    }

    res.json({message: `http://localhost:8000/${newURL.id}`, type: "success" });
});
mongoose.connect(process.env.MONGO_DB_URL, (err) => {
    if (err) {
        console.log(err);
    }

    console.log("Database connected successfully.✅")
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}. ✅`);
});
