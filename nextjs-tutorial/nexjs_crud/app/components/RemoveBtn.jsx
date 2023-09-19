'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const RemoveBtn = ({ id }) => {
  const router = useRouter();
  const removeTopic = async () => {
    const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      router.refresh();
      router.push('/');
    }
  };

  return (
    <button className="bg-red-400 px-4 py-2 rounded-md" onClick={removeTopic}>
      Delete
    </button>
  );
};

export default RemoveBtn;
