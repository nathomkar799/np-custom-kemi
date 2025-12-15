import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import staticRoute from "./routes/staticRoute.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// serve static files
app.use(express.static(path.join(__dirname, "views")));

// use router
app.use("/", staticRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}. ✅`);
});
