import express from 'express';
import {
  getAllBlog,
  addBlog,
  updateBlog,
  getById,
  deleteBlog,
  getByUserId,
} from '../controller/blog-controller';

const blogRouter = express.Router();

blogRouter.get('/', getAllBlog);
blogRouter.post('/', addBlog);
blogRouter.put('/update/:id', updateBlog);
blogRouter.get('/:id', getById);
blogRouter.delete('/:id', deleteBlog);
blogRouter.get('/user/:id', getByUserId);

export default blogRouter;
