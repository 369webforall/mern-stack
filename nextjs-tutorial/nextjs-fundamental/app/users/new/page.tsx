'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
const NewPage = () => {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push('/')}>Submit form</button>
    </div>
  );
};

export default NewPage;
