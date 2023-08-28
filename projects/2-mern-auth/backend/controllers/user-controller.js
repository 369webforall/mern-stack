const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: 'User already exists! Login Instead' });
  }
  const hashedPassword = bcrypt.hashSync(password);
  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }
  return res.status(201).json({ message: user });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err);
  }
  if (!existingUser) {
    return res.status(404).json({ message: 'user not found, please singup' });
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(404).json({ message: 'Invalid Email/ password' });
  }
  const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: '50s',
  });
  if (req.cookies[`${existingUser._id}`]) {
    req.cookies[`${existingUser._id}`] = '';
  }

  res.cookie(String(existingUser._id), token, {
    path: '/',
    expires: new Date(Date.now() + 1000 * 50), // 30 seconds
    httpOnly: true,
    sameSite: 'lax',
  });
  return res
    .status(200)
    .json({ message: 'Successfully Logged In', user: existingUser, token });
};

const verifyToken = (req, res, next) => {
  const cookies = req.headers.cookie;
  const token = cookies.split('=')[1];
  if (!token) {
    res.status(404).json({ message: 'No token found' });
  }
  jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(400).json({ message: 'Invalid TOken' });
    }
    console.log(user.id);
    req.id = user.id;
  });
  next();
};

const getUser = async (req, res, next) => {
  const userId = req.id;
  let user;
  try {
    user = await User.findById(userId, '-password');
  } catch (err) {
    return new Error(err);
  }
  if (!user) {
    return res.status(404).json({ messsage: 'User Not Found' });
  }
  console.log(user);
  return res.status(200).json({ user });
};

module.exports = { signup, login, verifyToken, getUser };
