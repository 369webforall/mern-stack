import React from 'react';
import Image from 'next/image';

async function getData() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random', {
    cache: 'no-cache',
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data;
}

const Dog = async () => {
  const dog = await getData();
  console.log(dog);
  return (
    <div>
      <h1>Random dog image</h1>
      <div className="w-[400px] h-[300px] border border-zinc-600 p-2 relative">
        <Image src={dog.message} fill className="object-contain" />
      </div>
    </div>
  );
};

export default Dog;
