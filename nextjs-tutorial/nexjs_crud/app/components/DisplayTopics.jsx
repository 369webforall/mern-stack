import React from 'react';
import Link from 'next/link';
async function getData() {
  const res = await fetch('http://localhost:3000/api/topics', {
    cache: 'no-cache',
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const DisplayTopics = async () => {
  const topics = await getData();

  return (
    <div className="max-w-5xl mx-auto">
      {topics.map((t) => (
        <div
          key={t._id}
          className="bg-slate-800 rounded-md p-4 flex justify-between items-center mb-2 text-white"
        >
          <div>
            <h1>{t.title}</h1>
            <p>{t.description}</p>
          </div>

          <div className="flex gap-2">
            <Link
              href={`/editTopic/${t._id}`}
              className="bg-orange-400 p-2 rounded-full"
            >
              Edit
            </Link>
            <Link
              href={`/${t._id}`}
              className="bg-red-400 px-4 py-2 rounded-md"
            >
              Delete
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayTopics;
