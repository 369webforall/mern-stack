import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({ data, onUpdate, onDelete }) => {
  const { name, email, age, _id } = data;

  return (
    <div className="p-4 border border-gray-300 rounded-md mb-4">
      <div className="mb-2">
        <span className="font-bold">Name:</span> {name}
      </div>
      <div className="mb-2">
        <span className="font-bold">Email:</span> {email}
      </div>
      <div className="mb-2">
        <span className="font-bold">Age:</span> {age}
      </div>
      <div className="flex justify-end">
        <Link
          to={`/${_id}`}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
          onClick={() => onUpdate(_id)}
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

export default Card;
