import React, { useState } from 'react';

const AddBook = () => {
  const [book, setBook] = useState({
    name,
    author,
    desc,
    price,
    img,
    available,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
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
              value="name"
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
              value="author"
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
              value="desc"
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
              value="price"
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
              name="image"
              value="image"
              className="mt-1 p-2 border border-gray-500 rounded w-full required"
            />
          </div>
          <div>
            <input type="radio" id="available" name="available" />
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
