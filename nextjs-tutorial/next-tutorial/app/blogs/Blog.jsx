'use client';

import { useRouter } from 'next/navigation';

const Blog = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          router.push('/todos');
        }}
        className="bg-purple-500 text-white px-4 py-2 rounded-sm"
      >
        Go to Todos
      </button>
    </div>
  );
};

export default Blog;
