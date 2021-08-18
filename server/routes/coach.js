const Coach = require("../models/coach");
const User = require("../models/user");

exports.createCoach = async (req, res) => {
  const { firstName, lastName, description, areas, hourlyRate } = req.body;
  const user = res.locals.user;
  try {
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      description.trim() === "" ||
      areas.length === 0 ||
      hourlyRate === null ||
      hourlyRate < 0
    ) {
      throw new Error("Invalid Input");
    }

    const newCoach = {
      firstName: firstName,
      lastName: lastName,
      description: description,
      areas: areas,
      hourlyRate: hourlyRate,
    };

    const coach = await new Coach(newCoach);
    await coach.save();
    await User.findOneAndUpdate({ _id: user._id }, { coachId: coach._id });
    return res.status(200).json(coach);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

exports.getAllCoaches = async (req, res) => {
  try {
    const allCoaches = await Coach.find();
    if (!allCoaches) throw new Error("Unable to find any coach");
    return res.status(200).json(allCoaches);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

exports.getSingleCaoch = async (req, res) => {
  try {
    const coachId = req.params.id;
    const currCaoch = await Coach.findOne({ _id: coachId });
    if (!currCaoch) {
      throw new Error("Unable to find current coach.");
    }
    return res.status(200).json(currCaoch);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};
