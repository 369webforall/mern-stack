import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <header className="flex justify-between items-center px-2 sm:px-8 bg-blue-600 text-white py-4 text-lg">
      <Link to="/">
        <h1>MyBlog</h1>
      </Link>
      {isLoggedIn && (
        <nav className="flex gap-4">
          <Link to="/blogs">All Blogs</Link>
          <Link to="/myblogs">My Blog</Link>
        </nav>
      )}

      <div className="flex gap-4">
        {!isLoggedIn && (
          <>
            <Link to="/auth" className="bg-orange-600 px-4 py-1 rounded-full">
              Loign/Signup
            </Link>
          </>
        )}
        {isLoggedIn && (
          <Link
            to="/auth"
            className="bg-orange-600 px-4 py-1 rounded-full"
            onClick={() => dispatch(authActions.logout)}
          >
            Logout
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
