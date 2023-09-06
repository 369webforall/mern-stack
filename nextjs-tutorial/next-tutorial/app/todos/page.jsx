import React from 'react';
import TodoPage from './TodoPage';
const Todo = () => {
  return (
    <div>
      <TodoPage />
    </div>
  );
};

export default Todo;

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const todos = await res.json();

  const sliceTodos = todos.splice(0, 10);
  return sliceTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}
