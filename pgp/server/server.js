import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import auth from "./routes/auth.js"; // 👈 Add .js extension for ES Module

dotenv.config();
const app = express();

// ✅ Allow requests from frontend
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(express.json());

// ✅ Use auth routes
app.use("/api/auth", auth);

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => {
  console.log("❌ MongoDB connection error:", err.message);
});

// ✅ Start server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
