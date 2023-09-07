import React from 'react';
import Link from 'next/link';
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

async function getUserPost(userId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    {
      cache: 'force-cache',
    }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  let data = await res.json();
  return data;
}

const UserPage = async ({ params }) => {
  console.log(params);
  const userId = params.userId;
  const userData = await getData(userId);
  const userPost = await getUserPost(userId);

  const [user, posts] = await Promise.all([userData, userPost]);
  console.log(posts);

  return (
    <div className="bg-slate-800 text-white w-[400px] p-4 rounded-sm">
      <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
      </div>
      <div className="bg-gray-900 text-white">
        {posts.map((post) => (
          <Link href={`/users/${userId}/${post.id}`}>
            <p>{post.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
