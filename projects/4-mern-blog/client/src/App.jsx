import React from 'react';
import Root from './components/Root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page';
import Home from './pages/Home';
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs';
import BlogDetails from './components/BlogDetail';
import AddBlog from './components/AddBlog';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/myblogs',
        element: <UserBlogs />,
      },
      {
        path: '/myblogs/:id',
        element: <BlogDetails />,
      },
      {
        path: '/blogs/add',
        element: <AddBlog />,
      },
      {
        path: '/auth',
        element: <Auth />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
