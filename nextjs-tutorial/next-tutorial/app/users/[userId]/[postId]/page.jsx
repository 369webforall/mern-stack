import React from 'react';

async function getPost(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
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

const PostDetails = async ({ params }) => {
  const id = params.postId;
  const post = await getPost(id);

  return (
    <div className="max-w-2xl bg-blue-400 text-white p-2 border-r-2 mt-5">
      <h1>Post Details: userId:{post.userId}</h1>
      <h2>Title: {post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;
