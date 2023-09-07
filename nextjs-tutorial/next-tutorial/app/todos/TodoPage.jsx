import React from 'react';
import Link from 'next/link';
//https://jsonplaceholder.typicode.com/todos/

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data;
}

const TodoPage = async () => {
  const todos = await getData();
  return (
    <div>
      {todos.map((todo) => (
        <Link key={todo.id} href={`/todos/${todo.id}`}>
          {' '}
          <p>Todo:{todo.id}</p>
        </Link>
      ))}
    </div>
  );
};

export default TodoPage;
