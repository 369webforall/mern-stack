import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddBook = () => {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const [book, setBook] = useState({
    name: '',
    author: '',
    desc: '',
    price: '',
    img: '',
  });
  const handleChange = (e) => {
    setBook((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    await axios
      .post('http://localhost:5000/books', {
        name: String(book.name),
        author: String(book.author),
        desc: String(book.desc),
        price: Number(book.price),
        img: String(book.img),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => navigate('/all-books'));
  };
  return (
    <div>
      <div>display error</div>
      <div>
        <h1 className="text-center text-2xl">Add Book</h1>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="block font-medium text-gray-800">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={book.name}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-500 rounded w-full required"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="block font-medium text-gray-800">
              Author:
            </label>
            <input
              type="text"
              id="author"
              name="author"
              onChange={handleChange}
              value={book.author}
              className="mt-1 p-2 border border-gray-500 rounded w-full required"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="block font-medium text-gray-800">
              Description
            </label>
            <input
              type="text"
              id="desc"
              name="desc"
              onChange={handleChange}
              value={book.desc}
              className="mt-1 p-2 border border-gray-500 rounded w-full required"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="block font-medium text-gray-800">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              onChange={handleChange}
              value={book.price}
              className="mt-1 p-2 border border-gray-500 rounded w-full required"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="block font-medium text-gray-800">
              Image:
            </label>
            <input
              type="text"
              id="image"
              name="img"
              value={book.img}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-500 rounded w-full required"
            />
          </div>
          <div>
            <input
              type="radio"
              id="available"
              name="available"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <label htmlFor="available">Available</label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
