import React from 'react';
import Home from './pages/home';
import AllPost from './pages/AllPost';
import NewPost from './pages/NewPost';
import Update from './components/Update';
import Root from './components/Layout';
import ErrorPage from './error-page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
        path: '/new-post',
        element: <NewPost />,
      },
      {
        path: '/all-post',
        element: <AllPost />,
      },
      {
        path: '/:id',
        element: <Update />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
