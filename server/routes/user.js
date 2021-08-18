const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const errors = {};

  try {
    if (name.trim() === "") errors.name = "Name must not be empty.";
    if (email.trim() === "" || !email.includes("@"))
      errors.email = "Email must valid email.";
    if (password.trim() === "" || password.trim().length < 5) {
      errors.password = "Password must not be empty or less then 5 characters.";
    }

    const currUser = await User.findOne({ email });
    if (currUser) {
      errors.email = "User already exists.";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors);
    }

    const hashedPassword = await bcrypt.hash(password, 6);

    const newUser = {
      name: name,
      email: email,
      password: hashedPassword,
    };

    const user = await new User(newUser);
    await user.save();
    const updatedUser = {
      name: newUser.name,
      email: newUser.email,
    };
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong." });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const errors = {};

    if (email.trim() === "" || !email.includes("@"))
      errors.email = "Email must valid email.";
    if (password.trim() === "" || password.trim().length < 5) {
      errors.password = "Password must not be empty or less then 5 characters.";
    }

    const currentUser = await User.findOne({ email });
    if (!currentUser) {
      errors.email = "Email is not a valid email.";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors);
    }

    const comparePasswords = await bcrypt.compare(
      password,
      currentUser.password
    );
    if (!comparePasswords) {
      throw new Error("Password does not match.");
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    const updatedUser = {
      token: token,
      name: currentUser.name,
      email: currentUser.email,
      id: currentUser._id,
      coachId: null,
    };
    return res.status(201).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ password: error.message });
  }
};

exports.getCurrentUser = async (req, res) => {
  const user = res.locals.user;
  return res.status(200).json(user);
};
