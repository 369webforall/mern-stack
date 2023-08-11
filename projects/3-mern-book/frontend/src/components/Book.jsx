import React from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
const Book = (props) => {
  const { name, author, desc, price, img, available, _id } = props.book;
  const { handleDelete } = props;
  const navigate = useNavigate();

  console.log(props);
  return (
    <div className="max-w-[200px] border border-red-600">
      <div>
        <img src={img} alt={name} className="h-[250px] w-full object-cover" />
        <h1>Name:{name}</h1>
        <h2>{author}</h2>
        <p>Desc:{desc}</p>
        <div>
          <span>Price $:{price}</span> <span>Available: {available}</span>
        </div>

        <div className="mt-6">
          <Link
            to={`/books/${_id}`}
            className="bg-purple-600 text-white px-4 py-2 rounded-md mr-2"
          >
            Update
          </Link>
          <Link
            to="#"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            onClick={() => handleDelete(_id)}
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
