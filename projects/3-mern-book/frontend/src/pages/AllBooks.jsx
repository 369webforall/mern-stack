import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Book from '../components/Book';

const getAllBooks = async () => {
  try {
    return await axios.get('http://localhost:5000/books');
  } catch (err) {
    console.log(err);
  }
};

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:5000/books/${id}`)
      .then((res) => res.data);
  };

  useEffect(() => {
    getAllBooks().then((res) => {
      res.data && setBooks(res.data.books);
    });
  }, []);

  return (
    <div>
      <h1>List of Book</h1>
      <div className="flex gap-5">
        {books &&
          books.map((book) => (
            <Book book={book} key={book._id} handleDelete={handleDelete} />
          ))}
      </div>
    </div>
  );
};

export default AllBooks;
