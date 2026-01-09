const mongoose = require("mongoose");

const seasonSchema = new mongoose.Schema({
  name: { type: String, required: true }, // VD: Vụ Đông Xuân 2024
  field: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Field", 
    required: true 
  }, // Vụ này thuộc cánh đồng nào
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date }, // Ngày kết thúc/thu hoạch dự kiến
  status: { 
    type: String, 
    enum: ["active", "completed", "planned"], 
    default: "active" 
  }, // Đang canh tác / Đã thu hoạch / Dự kiến
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Season", seasonSchema);