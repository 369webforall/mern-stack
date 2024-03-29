import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [book, setBook] = useState({
    name: '',
    author: '',
    desc: '',
    price: '',
    img: '',
  });

  const [error, SetError] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  //fetch single item

  const singleUser = async () => {
    await axios
      .get(`http://localhost:5000/books/${id}`)
      .then((res) => res.data)
      .then((data) => {
        const { name, author, desc, price, img } = data.book;
        setBook({
          name,
          author,
          desc,
          price,
          img,
        });
      });
  };

  useEffect(() => {
    singleUser();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/books/${id}`, {
        name: String(book.name),
        author: String(book.author),
        description: String(book.desc),
        price: Number(book.price),
        image: String(book.img),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => navigate('/all-books'));
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="text-center bg-orange-300">
        {error && <h1>{error}</h1>}
      </div>
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
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save Edit
        </button>
      </div>
    </form>
  );
};

export default UpdateBook;
