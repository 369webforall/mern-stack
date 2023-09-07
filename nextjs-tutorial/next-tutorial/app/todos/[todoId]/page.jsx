import React from 'react';
import { notFound } from 'next/navigation';

export const dynamicParams = true;

async function getData(todoId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
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

  if (!todo.id) return notFound();

  return (
    <div className="bg-gray-400 p-4">
      <p>Id {todo.id}</p>
      <p>Title: {todo.title}</p>
      <p>Completed: {todo.completed ? 'True' : 'False'}</p>
    </div>
  );
};

export default SinglePage;

// This is a reserved function
export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const todos = await res.json();

  const trimmedTodos = todos.splice(0, 15); // [{}, {}]
  return trimmedTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}
