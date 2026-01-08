const mongoose = require("mongoose");
const fieldSchema = new mongoose.Schema({
  name: String,
  address: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
module.exports = mongoose.model("Field", fieldSchema);
