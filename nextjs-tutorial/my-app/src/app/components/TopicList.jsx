import React from 'react';
import RemoveBtn from './Remove';
import { HiPencilAlt } from 'react-icons/hi';
import Link from 'next/link';
const TopicList = ({ params }) => {
  const { id } = params;
  return (
    <div className="border border-red-500 p-2 max-w-lg mx-auto flex justify-between items-center rounded-md">
      <div>
        <h1>Blog Title</h1>
        <p>
          Blog Description Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ipsum enim a distinctio odit aperiam at odio dolor eveniet,
          iusto magni eaque hic officiis sequi ad similique nisi suscipit
          numquam quasi?
        </p>
      </div>
      <div className="flex gap-4">
        <RemoveBtn />
        <Link href={`/edit/${id}`}>
          <HiPencilAlt size={24} className="text-green-400" />
        </Link>
      </div>
    </div>
  );
};

export default TopicList;
