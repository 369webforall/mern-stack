'use client';
import React, { useState } from 'react';
import { CldUploadWidget, CldImage } from 'next-cloudinary';

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState('');
  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="A coffee image"
        />
      )}
      <CldUploadWidget
        uploadPreset="jngeoqab"
        options={{
          sources: ['local'],
          multiple: false,
          maxFiles: 5,
        }}
        onUpload={(result, widget) => {
          if (result.event !== 'success') return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button
            onClick={() => open()}
            className="bg-orange-500 px-4 py-2 rounded-sm text-white"
          >
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
