const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Load biến môi trường

const authRoutes = require("./src/routes/authRoute");
const fieldRoutes = require("./src/routes/fieldRoute");

const app = express();
const PORT = process.env.PORT || 4000;

// --- Middlewares ---
app.use(express.json()); // Để đọc JSON từ body
app.use(cors()); // Cho phép Frontend gọi vào

// --- Database Connection ---
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Đã kết nối MongoDB"))
  .catch((err) => console.error("❌ Lỗi kết nối DB:", err));

// --- Routes ---
app.use("/api/auth", authRoutes);
app.use("/api/fields", fieldRoutes); // Sau này sẽ thêm middleware bảo vệ ở đây

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
