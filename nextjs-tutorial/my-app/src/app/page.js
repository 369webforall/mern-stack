import React from 'react';
import Image from 'next/image';
import NatureImage from '../../public/images/nature.jpg';
const Home = () => {
  return (
    <div className="w-full h-screen">
      <h1>Image from nextjs</h1>
      <section className="container mx-auto bg-red-600 text-white h-screen">
        {/* <div className="relative bg-slate-500">
          <Image
            src={NatureImage}
            alt="nature"
            fill
            priority
            className="object-cover block"
          />
        </div> */}
        <div
          style={{ display: 'flex', flexDirection: 'column' }}
          className="w-[50%]"
        >
          <Image
            alt="Mountains"
            // Importing an image will
            // automatically set the width and height
            src={NatureImage}
            sizes="100vw"
            // Make the image display full width
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
