import axios from 'axios';
import React, { useEffect, useState } from 'react';

import CustomInput from '../components/CustomInput';
import Button from '../components/Button';
import image from '../assets/index';
import Image from 'next/image';

const addCarForm = () => {
  const [listOfCars, setListOfCars] = useState([]);
  const [carTitle, setCarTitle] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState(0);

  const fetchCars = async () => {
    try {
      const response = await axios.get('/api/car', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('data', response.data);
    } catch (error) {
      console.log('Error', error);
    }
  };

  // get data
  useEffect(() => {
    fetchCars();
  }, []);

  // post data
  const createCar = async (event) => {
    event.preventDefault();
    const params = new URLSearchParams();
    params.append('car-title', carTitle);
    try {
      const response = await axios.post('/api/car', {
        carTitle,
        model,
      });
      alert('User Created');
      console.log(response);
    } catch (error) {
      console.log('Error', error);
    }
  };

  const handleChange = (event) => {
    setCarTitle(event.target.value);
    setModel(event.target.value);
    // setPrice(event.target.value);
  };

  // grid place-items-center flex-row place-content-center -mx-3 mb-6 bg-gray-background border-r-{10} px-6 w-full bg-white flex flex-wrap
  // flex-row place-items-center place-content-center gap-x-3 px-6 m-20 mx-96 text-black bg-white flex-wrap
  return (
    <>
      <div className="grid place-items-center flex-row -mx-3 mb-6 bg-gray-background border-r-{10} px-6 w-full">
        <h1 className="content-center text-left text-2xl text-secondinary-default bg-white flex-wrap">Add a Car for Rent</h1>
        <p className="text-secondinary-default bg-white flex-wrap">Please enter your car info</p>

        <div className="text-form-title-color">
          {listOfCars.map((cars) => (
            <div>
              <h1>
                Name: {cars.carTitle}
              </h1>
            </div>
          ))}
        </div>

        <form
          className="grid gap-6 mb-6 md:grid-cols-2 place-items-center place-content-center w-full md:w-1/2 px-6 md:mb-0 gap-x-3 overflow:hidden
         text-black bg-white flex-wrap"
          action="/"
          method="post"
          onSubmit={createCar}
        >

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-form-title-color">cars</label>
            <input
              className="bg-form-grey-background border-r-{10}"
              type="text"
              placeholder="placeholder"
              onClick={handleChange}
              onChange={(event) => {
                setCarTitle(event.target.value);
                setModel(event.target.value);
              }}
            />

          </div>

          <CustomInput
            label="Car Name"
            type="text"
            id="last"
            placeholder="Car Title"
            onClick={handleChange}
            onChange={(event) => {
              setCarTitle(event.target.value);
              setModel(event.target.value);
            }}
          />

          <CustomInput
            label="Car Brand"
            type="text"
            id="last"
            placeholder="Brand Name"
          />

          <CustomInput
            label="Rent Prices"
            type="number"
            id="last"
            placeholder="Price in dollars"
          />

          <CustomInput
            label="Capacity"
            type="number"
            id="last"
            placeholder="Capacity in persons"
          />

          <CustomInput
            label="Car Type"
            type="text"
            id="last"
            placeholder="Car Type"
          />

          <CustomInput
            label="Location"
            type="text"
            id="last"
            placeholder="Select your city"
          />

          <button
            type="submit"
          >Submit
          </button>

        </form>

        <div className="place-content-center w-half md:w-1/2 px-6 mb-6 md:mb-0 gap-x-3 overflow:hidden text-black bg-blue flex flex-wrap">
          Upload Images
        </div>

        <div className="place-content-center w-full md:w-1/2 px-6 mb-6 md:mb-0 gap-x-3 overflow:hidden text-black bg-white flex flex-wrap">
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

        <div className="place-content-center w-full md:w-1/2 px-6 mb-6 md:mb-0 gap-x-3 overflow:hidden text-black bg-btn-blue flex flex-wrap">
          Uploading files

          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="multiple_files">Upload multiple files</label>
          <input
            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border
           border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="multiple_files"
            type="file"
            multiple
          />

        </div>

      </div>

      <div className="place-content-center w-full md:w-1/2 px-6 mb-6 md:mb-0 gap-x-3 overflow:hidden text-black bg-white flex flex-wrap">
        Confirmation
      </div>
      <Button />
    </>
  );
};
export default addCarForm;
