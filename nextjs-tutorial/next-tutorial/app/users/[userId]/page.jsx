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

  return (
    <div className="bg-slate-800 text-white w-[400px] p-4 rounded-sm">
      <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
      </div>
      <div className="bg-orange-400 text-white p-4">
        {posts.map((post) => (
          <Link href={`/users/${userId}/${post.id}`} key={post.id}>
            <p className="bg-gray-600 text-white p-2 mb-4">
              {post.id}:{post.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
