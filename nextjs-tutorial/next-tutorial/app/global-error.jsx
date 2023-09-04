'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import Link from 'next/link';
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>

      <Link href="/home" className="bg-blue-500 text-white">
        Go To Home Page
      </Link>
    </div>
  );
}
