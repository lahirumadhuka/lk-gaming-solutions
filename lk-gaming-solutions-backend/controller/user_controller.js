const UserModel = require("../model/user_model");

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.countDocuments();
    res.status(200).json({ usersCount: users });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    res.status(200).json({ response: user });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const createUser = async (req, res) => {
  try {
    const usernameExist = await UserModel.findOne({ username: req.body.username });
    if (usernameExist) {
      return res.status(409).json({ message: "Username already exists!" });
    }

    const emailExist = await UserModel.findOne({ email: req.body.email });
    if (emailExist) {
      return res.status(409).json({ message: "email already exists!" });
    }
    
    await UserModel.create(req.body);
    res.status(201).json({ message: "Account created successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findByIdAndUpdate(id, req.body);

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.status(200).json({ message: "Account updated successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.status(200).json({ message: "Account deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};