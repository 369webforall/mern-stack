import React from 'react';
import Link from 'next/link';
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'force-cache',
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const User = async () => {
  const users = await getData();
  return (
    <div>
      {users.map((user) => (
        <p className="mb-4" key={user.id}>
          <Link href={`users/${user.id}`} className="mt-2 bg-orange-300 p-2">
            {user.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default User;
