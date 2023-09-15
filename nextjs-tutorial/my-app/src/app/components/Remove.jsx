import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

const RemoveBtn = () => {
  return (
    <div>
      <button className="text-red-400">
        <HiOutlineTrash size={24} />
      </button>
    </div>
  );
};

export default RemoveBtn;
