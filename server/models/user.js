const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
