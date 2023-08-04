import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Book from './Book';
import { useNavigate } from 'react-router-dom';

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const getAllBooks = async () => {
    try {
      return await axios
        .get('http://localhost:5000/books')
        .then((res) => setBooks(res.data.books));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllBooks();
    // .then((res) => setBooks(res.books));
    console.log(books);
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:5000/books/${id}`)
      .then((res) => {
        console.log(res);
        if (res) {
          setError(res.data.message);
          setTimeout(() => {
            setError('');
            getAllBooks();
            navigate('/all-books');
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {error && (
        <h1 className="bg-orange-400 px-2 py-2 text-white text-lg">{error}</h1>
      )}
      <h1>Show all Books</h1>
      <div className="flex ga-2">
        {books.map((book) => (
          <Book book={book} key={book._id} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
