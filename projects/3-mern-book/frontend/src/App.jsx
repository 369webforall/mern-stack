import React from 'react';
import Root from './components/Root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page';
import Home from './pages/Home';
import AllBooks from './pages/AllBooks';
import AddBook from './pages/AddBook';
import UpdateBook from './pages/UpdateBook';
const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/all-books',
        element: <AllBooks />,
      },
      {
        path: '/add-book',
        element: <AddBook />,
      },
      {
        path: '/books/:id',
        element: <UpdateBook />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
