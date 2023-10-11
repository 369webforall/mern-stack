import React from 'react';

interface User {
  id: number;
  name: string;
}

async function fetchUser() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return await res.json();
}

const UsersPage = async () => {
  const users: User[] = await fetchUser();

  console.log(users);

  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
};

export default UsersPage;
