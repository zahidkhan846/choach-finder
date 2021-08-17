const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const { createUser, loginUser } = require("./routes/user");
const {
  createCoach,
  getAllCoaches,
  getSingleCaoch,
} = require("./routes/coach");
const { createRequest, getAllRequests } = require("./routes/request");
// const { auth } = require("./middleware/auth");

require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post("/create-user", createUser);
app.post("/login-user", loginUser);
app.get("/all-coaches", getAllCoaches);
app.get("/all-coaches/:id", getSingleCaoch);
app.post("/create-coach", createCoach);
app.post("/create-request", createRequest);
app.get("/all-requests/:coachId", getAllRequests);

app.listen(port, async () => {
  console.log(`Listening at http://localhost:${port}`);
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("DB CONNECTED!");
});
