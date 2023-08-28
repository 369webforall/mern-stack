import React from 'react';
import Snow from '../assets/snow.jpg';
const Card = ({ blog }) => {
  //   const { title, description, image } = blog;
  return (
    <div className="p-10">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={Snow} className="w-full" alt="Mountain" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Test 1</div>
          <p className="text-gray-700 text-base">Blog desc</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
