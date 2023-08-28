import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendRequest = async () => {
    const res = await axios
      .post('http://localhost:8000/api/login', {
        email,
        password,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleLogin = (e) => {
    e.preventDefault();
    sendRequest().then(() => navigate('/'));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-96 p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 w-full border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
