const mongoose = require("mongoose");

const plotSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Tên thửa: Thửa 1, Thửa 2...
  area: { type: Number, required: true }, // Diện tích (m2)
  status: { type: String, default: "active" }, // Trạng thái: active, inactive

  field: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Field", 
    required: true 
  },
  
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Plot", plotSchema);