const UserModel = require("../model/user_model");

const getUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.query.email })
    if (!user) {
        return res.status(404).json({ message: "Invalid email or password." });
    }

    if (user.password !== req.query.password) {
        return res.status(404).json({ message: "Invalid email or password." });
    }

    res.status(200).json({ message: "Login successful!", response: user._id });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

module.exports = {
  getUser,
};