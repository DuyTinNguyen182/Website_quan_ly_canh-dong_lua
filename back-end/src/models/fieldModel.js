const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Field", fieldSchema);