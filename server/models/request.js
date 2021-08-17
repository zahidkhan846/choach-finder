const mongoose = require("mongoose");

const requestSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  coachId: { type: String, required: true },
});

module.exports = mongoose.model("Request", requestSchema);
