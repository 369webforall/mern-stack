import React from 'react';
import { Link } from 'react-router-dom';
const Book = ({ book, onDelete }) => {
  const { name, author, desc, price, img, available, _id } = book;

  return (
    <div className="w-[300px] border border-gray-900 p-2">
      <img
        src={img}
        alt={name}
        className="w-full object-cover h-[200px] mb-2"
      />
      <h1>Name:{name}</h1>
      <p>Author:{author}</p>
      <p>{desc}</p>
      <p>{price}</p>

      <p>in-stock:{available}</p>
      <div className="flex justify-end">
        <Link
          to={`/books/${_id}`}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
        >
          Update
        </Link>
        <button
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => onDelete(_id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Book;
