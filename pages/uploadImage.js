import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Button from '../components/Button';
import image from '../assets/index';

const uploadImage = () => (
  <div className="w-1/2 mx-auto my-auto text-black bg-white pl-3">
    <div className="mx-auto p-1 text-black bg-white font-bold text-left">
      Upload Images
    </div>

    <div className="place-content-center w-11/12 mx-auto my-auto text-black bg-white py-5">
      <label
        htmlFor="dropzone-file"
        className="flex justify-center w-full h-32 px-4 transition bg-white border-2
  border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
      >
        <div className="flex flex-col justify-center items-center pt-5 pb-6">
          <Image src={image.vector} alt="uploadimage" priority className=" object-contain lg:scale-125" />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Drag and drop an image, or <span className="font-semibold text-cyan-600"> Browse</span></p>
          <p className="text-xs text-gray-500 dark:text-gray-400">High resolution images (png, jpg, gif)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  </div>
);

export default uploadImage;
