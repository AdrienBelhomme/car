import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import Button from '../components/Button';
import image from '../assets/index';

const uploadImage = () => {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

  /**
     * handleOnChange
     * @description Triggers when the file input changes (ex: when a file is selected)
     */

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  /**
     * handleOnSubmit
     * @description Triggers when the main form is submitted
     */

  //   async function handleOnSubmit(event) {
  //     event.preventDefault();

  //     const form = event.currentTarget;
  //     const fileInput = Array.from(form.elements).find(({ name }) => name === 'file');

  //     const formData = new FormData();

  //     // for (const file of fileInput.files) {
  //     //   formData.append('file', file);
  //     // }

  //     fileInput.files.forEach((file) => {
  //       formData.append('file', file);
  //     });

  //     formData.append('upload_preset', 'my-uploads');

  //     const data = await fetch('https://api.cloudinary.com/v1_1/[Your Cloudinary Cloud Name]/image/upload', {
  //       method: 'POST',
  //       body: formData,
  //     }).then((r) => r.json());

  //     setImageSrc(data.secure_url);
  //     setUploadData(data);
  //   }

  return (
  // <div className="w-1/2 mx-auto my-auto text-black bg-white pl-3">
  //   <div className="mx-auto p-1 text-black bg-white font-bold text-left">
  //     Upload Images
  //   </div>

  //   <div className="place-content-center w-11/12 mx-auto my-auto text-black bg-white py-5">
  //     <label
  //       htmlFor="dropzone-file"
  //       className="flex justify-center w-full h-32 px-4 transition bg-white border-2
  // border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
  //     >
  //       <div className="flex flex-col justify-center items-center pt-5 pb-6">
  //         <img src={imageSrc} />
  //         <Image src={image.vector} alt="uploadimage" priority className=" object-contain lg:scale-125" />
  //         {imageSrc && !uploadData && (
  //         <p>
  //           <button>Upload Files</button>
  //         </p>
  //         )}

  //         {uploadData && (
  //         <code><pre>{JSON.stringify(uploadData, null, 2)}</pre></code>
  //         )}
  //         <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Drag and drop an image, or <span className="font-semibold text-cyan-600"> Browse</span></p>
  //         <p className="text-xs text-gray-500 dark:text-gray-400">High resolution images (png, jpg, gif)</p>
  //       </div>
  //       <input id="dropzone-file" type="file" className="hidden" />
  //     </label>
  //   </div>

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
            <form
              method="post"
              onChange={handleOnChange}
            >
              <p>
                <input type="file" name="file" />
              </p>

              <img src={imageSrc} />

              {imageSrc && !uploadData && (
                <p />
              )}

              {uploadData && (
                <code><pre>{JSON.stringify(uploadData, null, 2)}</pre></code>
              )}

              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Drag and drop an image, or <span className="font-semibold text-cyan-600"> Browse</span></p>
              <p className="text-xs text-gray-500 dark:text-gray-400">High resolution images (png, jpg, gif)</p>
            </form>
          </div>
        </label>
      </div>
      <input id="dropzone-file" type="file" className="hidden" />
    </div>
  );
};

export default uploadImage;

