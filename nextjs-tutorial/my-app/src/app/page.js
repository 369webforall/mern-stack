import React from 'react';
import Image from 'next/image';
import NatureImage from '../../public/images/nature.jpg';
const Home = () => {
  return (
    <div className="w-full h-screen">
      <h1>Image from nextjs</h1>
      <section className="container mx-auto bg-red-600 text-white h-screen grid grid-cols-3 gap-8">
        <div className="relative bg-slate-500">
          <Image
            src={NatureImage}
            alt="nature"
            fill
            priority
            className="object-cover block"
          />
        </div>

        <div className="relative p-5">
          <Image
            src={NatureImage}
            alt="nature"
            fill
            priority
            className="object-contain"
          />
        </div>

        <div className="relative p-5">
          <Image
            src={NatureImage}
            alt="nature"
            fill
            priority
            className="object-contain"
          />
        </div>

        <div className="relative p-5">
          <Image
            src={NatureImage}
            alt="nature"
            fill
            priority
            className="object-contain"
          />
        </div>

        <div className="relative p-5">
          <Image
            src="https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="nature"
            fill
            priority
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
