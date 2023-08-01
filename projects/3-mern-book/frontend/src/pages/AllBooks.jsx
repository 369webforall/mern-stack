import React, { useEffect, useState } from 'react';
import axios from 'axios';
const getAllBooks = async () => {
  try {
    
  }
  return await axios.get('http://localhost:5000/books').then((res) => res.data);
};

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks().then((res) => setBooks(res.data));
    console.log(books);
  }, []);

  return <div>AllBooks</div>;
};

export default AllBooks;
