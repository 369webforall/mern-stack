'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const EditTopicForm = ({ id, title, description }) => {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error('Faild to update the topic');
      }
    } catch (error) {
      console.log(error);
    }
    setSubmitted(true);
    router.refresh();
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Edit Topic</h1>
        {submitted ? (
          <div className="text-green-600 font-semibold mb-4">
            Form submitted successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-600 mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full border rounded-md p-2"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-600 mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="w-full border rounded-md p-2"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
              >
                Edit Topic
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditTopicForm;
