const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./src/routes/authRoute");
const fieldRoutes = require("./src/routes/fieldRoute");
const plotRoutes = require("./src/routes/plotRoute");
const seasonRoutes = require("./src/routes/seasonRoute");
const diaryLogRoutes = require("./src/routes/diaryLogRoute");

const app = express();
const PORT = process.env.PORT || 4000;

// --- Middlewares ---
app.use(express.json());
app.use(cors());

// --- Database Connection ---
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Đã kết nối MongoDB"))
  .catch((err) => console.error("Lỗi kết nối DB:", err));

// --- Routes ---
app.use("/api/auth", authRoutes);
app.use("/api/fields", fieldRoutes);
app.use("/api/plots", plotRoutes);
app.use("/api/seasons", seasonRoutes);
app.use("/api/diary-logs", diaryLogRoutes);

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
