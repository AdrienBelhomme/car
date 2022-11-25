import axios from 'axios';
import React, { useState } from 'react';
import Image from 'next/image';

import CustomInput from '../components/CustomInput';
import Button from '../components/Button';
import image from '../assets/index';

const addCarForm = () => {
  const [carForm, setCarForm] = useState({
    carTitle: '',
    model: '',
    price: 0,
    people: '',
    carType: '',
    location: '',
    gas: 0,
    pickupLocation: '',
    dropOffLocation: '',
    availabilityFrom: new Date(),
    availabilityTo: new Date(),
    description: '',
    tag: '',
  });

  // post data
  const createCar = async (event) => {
    event.preventDefault();
    try {
      const carData = await axios.post('/api/car', { ...carForm });
      alert('User Created');
      console.log(carData);
    } catch (error) {
      console.log('Error', error);
    }
  };

  const handleChange = (event, name) => {
    setCarForm({ ...carForm, [name]: event.target.value });
  };

  return (
    <>
      {// Heading
      }
      <div className="mt-6 pb-10">
        <div className="w-1/2 mx-auto mt-5 py-6 text-black bg-white pl-3 font-bold ">
          <h1 className="text-left text-2xl pl-4 text-secondinary-default bg-white flex-wrap">Add a Car for Rent</h1>
          <p className="text-[#90A3BF] bg-white pb-6 pl-4 text-sm">Please enter your car info</p>
        </div>

        {// Form
      }
        <form
          className="gap-12 w-1/2 px-6 mx-auto
         text-black bg-white flex flex-wrap"
          action="/"
          method="post"
          onSubmit={createCar}
        >
          <CustomInput
            label="Car Title"
            type="text"
            id="last"
            placeholder="Car Title"
            onChange={handleChange}
            onHandleChange={(event) => handleChange(event, 'carTitle')}
          />

          <CustomInput
            label="Car Brand"
            type="text"
            id="last"
            placeholder="Brand Name"
            onClick={handleChange}
            onHandleChange={(event) => handleChange(event, 'model')}
          />

          <CustomInput
            label="Rent Price"
            type="number"
            id="last"
            placeholder="Price in dollars"
            onChange={handleChange}
            onHandleChange={(event) => handleChange(event, 'price')}
          />

          <CustomInput
            label="Capacity"
            type="number"
            id="last"
            placeholder="Capacity in persons"
            onChange={handleChange}
            onHandleChange={(event) => handleChange(event, 'people')}
          />

          <CustomInput
            label="Car Type"
            type="text"
            id="last"
            placeholder="Car Type"
            onChange={handleChange}
            onHandleChange={(event) => handleChange(event, 'carType')}
          />

          <CustomInput
            label="Location"
            type="text"
            id="last"
            placeholder="Select your city"
            onChange={handleChange}
            onHandleChange={(event) => handleChange(event, 'location')}
          />
          <CustomInput
            label="Gas"
            type="number"
            id="last"
            placeholder="Gas Capacity"
            onChange={handleChange}
            onHandleChange={(event) => handleChange(event, 'gas')}
          />
          <CustomInput
            label="Pickup Location"
            type="text"
            id="last"
            placeholder="Pickup Location"
            onChange={handleChange}
            onHandleChange={(event) => handleChange(event, 'pickupLocation')}
          />
          <CustomInput
            label="Dropoff Location"
            type="text"
            id="last"
            placeholder="Dropoff Location"
            onChange={handleChange}
            onHandleChange={(event) => handleChange(event, 'dropOffLocation')}
          />
          <CustomInput
            label="Availability From"
            type="date"
            id="last"
            placeholder="Availability From"
            onChange={handleChange}
            onHandleChange={(event) => handleChange(event, 'availabilityFrom')}
          />

          <CustomInput
            label="Availability To"
            type="date"
            id="last"
            placeholder="Availability To"
            onChange={handleChange}
            onHandleChange={(event) => handleChange(event, 'availabilityTo')}
          />
          <CustomInput
            label="Description"
            type="text"
            id="last"
            placeholder="Description"
            onChange={handleChange}
            onHandleChange={(event) => handleChange(event, 'description')}
          />
          {/* <button
            className="bg-form-grey-background outline-8 outline-black ring-2"
            type="submit"
          >Submit
          </button> */}

          <div className=" text-black bg-white font-bold text-left">
            Upload Images
          </div>

          <br />

          <label
            htmlFor="dropzone-file"
            className="flex pr-6 mr-16 justify-center place-items-center w-full h-{180} px-6 transition bg-white border-2
    border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
          >
            <div className="flex flex-col justify-center items-center pt-5 pb-6">
              <Image src={image.vector} alt="uploadimage" priority className=" object-contain my-4" />
              <p className="mb-2 text-sm text-[#3563E9]">Drag and drop an image, or <span className="font-semibold text-cyan-600"> Browse</span></p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">High resolution images (png, jpg, gif)</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>

          <br />

          <div className="pb-10 ml-auto mr-16">
            <Button />
          </div>

        </form>

        {// Upload Images
        }

        {/* <div className="w-1/2 mx-auto mb-6 text-black bg-white pl-3">
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

          <div className="justify-items-end mb-6">
            <Button />
          </div>
        </div> */}
      </div>

      {// Confirmation
        }
      <div className="w-1/2 py-6 mx-auto mb-6 text-black bg-white rounded-lg font-jakarta">
        <div className="mx-auto pl-9 text-black bg-white text-xl text-left font-semibold">
          Confirmation
        </div>

        <p className="text-[#90A3BF] bg-white pl-9 pb-6 text-sm">We are getting to the end. Just a few clicks and your rental is ready!</p>

        <div className="text-left pl-2 pb-1 mx-8 bg-[#F6F7F9] rounded font-semibold">
          <input type="checkbox" className="text-black m-4 text-base" /> <label>I agree with sending an Marketing and newsletter emails. No spawm, promissed!</label>
        </div>

        <br />

        <div className="text-left pl-2 pb-1 mx-8 bg-[#F6F7F9] rounded font-semibold">
          <input type="checkbox" className="text-black m-4 text-base" /> <label>I agree with our terms and conditions and privacy policy.</label>
        </div>

        <br />
        <div className="pl-9 pb-6">
          <Button />
        </div>

        <div className="pl-9 pb-2">
          <Image src={image.security} alt="uploadimage" priority className=" object-contain" />
        </div>

        <div className="mx-auto pl-9 text-black bg-white text-xl text-left font-semibold">
          All your data is safe
        </div>

        <p className="text-[#90A3BF] bg-white pl-9 pb-6 text-sm">We are using the most advanced security to provide you the best experience ever.</p>
      </div>

    </>
  );
};
export default addCarForm;
