import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });

  const [error, SetError] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here, you can handle the form submission, for example, by sending the data to a server.
    const response = await fetch('http://localhost:8080/', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    if (!response.ok) {
      console.log(result.message);
      SetError(result.message);
    }
    if (response.ok) {
      console.log(result);
      SetError('');
      setFormData({
        name: '',
        email: '',
        age: '',
      });

      navigate('/all-post');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="text-center bg-orange-300">
        {error && <h1>{error}</h1>}
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium text-gray-700">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-400 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium text-gray-700">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-400 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="age" className="block font-medium text-gray-700">
          Age:
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-400 rounded w-full"
          required
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewPost;
