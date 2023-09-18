'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
function AddTopic() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  // Add a function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert('Title and Description is required');
      return;
    }
    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        router.refresh();
        router.push('/');
      } else {
        throw new Error('Faild to create the topic');
      }
    } catch (error) {
      console.log(error);
    }

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Add Topic</h1>
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default AddTopic;
