import React from 'react';

async function getData(todoId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data;
}

const SinglePage = async ({ params }) => {
  const { todoId } = params;

  const todo = await getData(todoId);

  return (
    <div className="bg-gray-400 p-4">
      <p>Id {todo.id}</p>
      <p>Title: {todo.title}</p>
      <p>Completed: {todo.completed ? 'True' : 'False'}</p>
    </div>
  );
};

export default SinglePage;
