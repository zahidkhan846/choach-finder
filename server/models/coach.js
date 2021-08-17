const mongoose = require("mongoose");

const coachSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  description: { type: String, required: true },
  areas: { type: Array, required: true },
  hourlyRate: { type: Number, required: true },
});

module.exports = mongoose.model("Coach", coachSchema);
