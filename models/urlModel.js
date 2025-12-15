import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    originalURL: {
        required: true,
        type: String,
    },
    customURL: {
        typr: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const URL = mongoose.model("URL", urlSchema);

export default URL;