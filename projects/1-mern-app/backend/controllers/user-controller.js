const User = require('../models/userModel');

const getAllUser = async (req, res) => {
  let user;

  try {
    user = await User.find();
    if (!user) {
      return res.status(400).json({ message: 'No user found' });
    }
    return res.status(200).send(user);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  let singleUser;
  try {
    singleUser = await User.findById({ _id: id });
    if (!singleUser) {
      return res.status(400).json({ message: 'No user found' });
    }
    return res.status(200).send(singleUser);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
const addUser = async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const userData = await User.create({ name, email, age });
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//update user

const updateUserById = async (req, res) => {
  const id = req.params.id;
  const { name, email, age } = req.body;

  try {
    const updateUser = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!updateUser) {
      return res.status(400).json({ message: 'No user found' });
    }
    return res.status(200).send({ message: 'user updated' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

//delete user

const deleteUserById = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteUser = await User.findByIdAndDelete({ _id: id });
    if (!deleteUser) {
      return res.status(400).json({ message: 'No user found' });
    }
    return res.status(200).send({ message: 'user deleted' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// const updateUser = async (req, res) => {
//   const { name, email, age } = req.body;
//   let user;
//   try {
//     user = User.findOne(email);
//   } catch (err) {
//     return res.status(500).json({ message: err });
//   }
// };
module.exports = {
  addUser,
  getAllUser,
  getUserById,
  deleteUserById,
  updateUserById,
};
