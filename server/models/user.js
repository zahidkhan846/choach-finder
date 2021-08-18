const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
  coachId: { type: String, required: false, default: null },
});

module.exports = mongoose.model("User", userSchema);
