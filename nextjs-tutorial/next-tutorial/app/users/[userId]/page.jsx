import React from 'react';

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: 'force-cache',
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const UserPage = async ({ params }) => {
  console.log(params);
  const userId = params.userId;
  const user = await getData(userId);
  return (
    <div className="bg-slate-800 text-white w-[400px] p-4 rounded-sm">
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
};

export default UserPage;
