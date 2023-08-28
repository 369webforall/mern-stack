import React from 'react';
import Root from './components/Root';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';
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
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
