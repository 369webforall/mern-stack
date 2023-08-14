import mongoose from 'mongoose';
import Blog from '../model/Blog';
import User from '../model/User';

export const getAllBlog = async (req, res) => {
  let blogs;

  try {
    blogs = await Blog.find();
  } catch (err) {
    console.log(err);
  }
  if (!blogs) {
    return res.status(404).json({ message: 'No blog found' });
  }
  return res.status(200).json({ blogs });
};

export const addBlog = async (req, res) => {
  const { title, description, image, user } = req.body;

  let existingUser;

  try {
    existingUser = await User.findById(user);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
  if (!existingUser) {
    return res.status(400).json({ message: 'Unable to find user' });
  }

  const blog = new Blog({ title, description, image, user });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await blog.save({ session });
    existingUser.blogs.push(blog);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
  return res.status(200).json({ blog });
};

export const updateBlog = async (req, res) => {
  const blogId = req.params.id;
  const { title, description } = req.body;
  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(blogId, { title, description });
  } catch (err) {
    return console.log(err);
  }
  if (!blog) {
    return res.status(500).json({ message: 'Unable to update the blog' });
  }
  return res.status(200).json({ blog });
};

export const getById = async (req, res) => {
  const blogId = req.params.id;

  let blog;
  try {
    blog = await Blog.findById(blogId);
  } catch (err) {
    return console.log(err);
  }
  if (!blog) {
    return res.status(500).json({ message: 'Unable to get the blog' });
  }
  return res.status(200).json({ blog });
};

export const deleteBlog = async (req, res) => {
  const id = req.params.id;

  let blog;
  try {
    blog = await Blog.findByIdAndRemove(id).populate('user');
    await blog.user.blogs.pull(blog);
    await blog.user.save();
  } catch (err) {
    return console.log(err);
  }
  if (!blog) {
    return res.status(500).json({ message: 'Unable to delete the blog' });
  }
  return res.status(200).json({ message: 'Deleted sucessfully' });
};

export const getByUserId = async (req, res) => {
  const userId = req.params.id;
  let userBlogs;
  try {
    userBlogs = await User.findById(userId).populate('blogs');
  } catch (err) {
    return res.status(500).send({ message: err });
  }
  if (!userBlogs) {
    return res.status(404).json({ message: 'No Blog found' });
  }
  return res.status(200).json({ blogs: userBlogs });
};
