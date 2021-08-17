const Request = require("../models/request");

exports.createRequest = async (req, res) => {
  const { name, email, message, coachId } = req.body;
  try {
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      message.trim() === "" ||
      coachId.trim() === ""
    ) {
      throw new Error("Invalid Input Provided");
    }

    const newRequest = {
      name: name,
      email: email,
      message: message,
      coachId: coachId,
    };

    const request = await new Request(newRequest);
    await request.save();
    return res.status(200).json(request);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

exports.getAllRequests = async (req, res) => {
  const { coachId } = req.query;
  try {
    const allRequests = await Request.find();

    if (!allRequests) {
      throw new Error("Unable to find any requests.");
    }
    allRequests.filter((request) => request.coachId === coachId);
    return res.status(200).json(allRequests);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};
