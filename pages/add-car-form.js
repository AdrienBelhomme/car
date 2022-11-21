import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import CustomInput from '../components/CustomInput';
import Button from '../components/Button';
import image from '../assets/index';

const addCarForm = () => {
  const [listOfCars, setListOfCars] = useState([]);
  const [carTitle, setCarTitle] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState(0);
  const [people, setPeople] = useState('');
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [gas, setGas] = useState(0);
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');
  const [availabilityFrom, setAvailabilityFrom] = useState(new Date());
  const [availabilityTo, setAvailabilityTo] = useState(new Date());
  const [description, setDescription] = useState('');
  const [isPopular, setIsPopular] = useState('');

  // post data
  const createCar = async (event) => {
    event.preventDefault();
    try {
      const carData = await axios.post('/api/car', {
        carTitle,
        model,
        price,
        people,
        type,
        location,
        gas,
        pickupLocation,
        dropOffLocation,
        availabilityFrom,
        availabilityTo,
        description,
        isPopular,
      });
      alert('User Created');
      console.log(carData);
    } catch (error) {
      console.log('Error', error);
    }
  };

  const handleChange = (event) => {
    setCarTitle(event.target.value);
    setModel(event.target.value);
    setPrice(event.target.value);
    setPeople(event.target.value);
    setType(event.target.value);
    setLocation(event.target.value);
    setGas(event.target.value);
    setPickupLocation(event.target.value);
    setDropOffLocation(event.target.value);
    setAvailabilityFrom(event.target.value);
    setAvailabilityTo(event.target.value);
    setDescription(event.target.value);
    setIsPopular(event.target.value);
  };

  // grid place-items-center flex-row place-content-center -mx-3 mb-6 bg-gray-background border-r-{10} px-6 w-full bg-white flex flex-wrap
  // flex-row place-items-center place-content-center gap-x-3 px-6 m-20 mx-96 text-black bg-white flex-wrap
  return (
    <>
      {// Heading
      }
      <div className="grid place-items-center flex-row mx-auto mb-6 bg-gray-background px-6 py-6 w-full rounded-lg">
        <div className="w-1/2 mx-auto py-6 text-black bg-white pl-3 font-bold ">
          <h1 className="text-left text-2xl text-secondinary-default bg-white flex-wrap">Add a Car for Rent</h1>
          <p className="text-secondinary-default bg-white flex-wrap">Please enter your car info</p>
        </div>

        {// Form
      }
        <form
          className="grid gap-6 mb-6 md:grid-cols-2 place-items-center place-content-center w-1/2 px-6 md:mb-0 gap-x-3 overflow:hidden
         text-black bg-white flex-wrap"
          action="/"
          method="post"
          onSubmit={createCar}
        >

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-form-title-color">cars</label>
            <input
              className="bg-form-grey-background border-r-{10}"
              key="cars"
              type="text"
              placeholder="placeholder"
              onClick={handleChange}
              onChange={(event) => {
                setCarTitle(event.target.value);
              }}
            />

          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-form-title-color">brand</label>
            <input
              className="bg-form-grey-background border-r-{10}"
              key="brand"
              type="text"
              placeholder="placeholder"
              onClick={handleChange}
              onChange={(event) => {
                setModel(event.target.value);
              }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-form-title-color">price</label>
            <input
              className="bg-form-grey-background border-r-{10}"
              key="price"
              type="number"
              placeholder="placeholder"
              onClick={handleChange}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-form-title-color">people</label>
            <input
              className="bg-form-grey-background border-r-{10}"
              key="people"
              type="number"
              placeholder="placeholder"
              onClick={handleChange}
              onChange={(event) => {
                setPeople(event.target.value);
              }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-form-title-color">type</label>
            <input
              className="bg-form-grey-background border-r-{10}"
              key="type"
              type="text"
              placeholder="placeholder"
              onClick={handleChange}
              onChange={(event) => {
                setType(event.target.value);
              }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-form-title-color">location</label>
            <input
              className="bg-form-grey-background border-r-{10}"
              key="location"
              type="text"
              placeholder="placeholder"
              onClick={handleChange}
              onChange={(event) => {
                setLocation(event.target.value);
              }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-form-title-color">gas</label>
            <input
              className="bg-form-grey-background border-r-{10}"
              key="gas"
              type="number"
              placeholder="placeholder"
              onClick={handleChange}
              onChange={(event) => {
                setGas(event.target.value);
              }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-form-title-color">pickup location</label>
            <input
              className="bg-form-grey-background border-r-{10}"
              key="pickupLocation"
              type="text"
              placeholder="placeholder"
              onClick={handleChange}
              onChange={(event) => {
                setPickupLocation(event.target.value);
              }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-form-title-color">dropoff location</label>
            <input
              className="bg-form-grey-background border-r-{10}"
              key="dropoffLocation"
              type="text"
              placeholder="placeholder"
              onClick={handleChange}
              onChange={(event) => {
                setDropOffLocation(event.target.value);
              }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-form-title-color">Availability From</label>
            <input
              className="bg-form-grey-background border-r-{10}"
              key="AvailabilityFrom"
              type="date"
              placeholder="placeholder"
              onClick={handleChange}
              onChange={(event) => {
                setAvailabilityFrom(event.target.value);
              }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-form-title-color">Availability To</label>
            <input
              className="bg-form-grey-background border-r-{10}"
              key="AvailabilityTo"
              type="date"
              placeholder="placeholder"
              onClick={handleChange}
              onChange={(event) => {
                setAvailabilityTo(event.target.value);
              }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-form-title-color">description</label>
            <input
              className="bg-form-grey-background border-r-{10}"
              key="description"
              type="text"
              placeholder="placeholder"
              onClick={handleChange}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-form-title-color">isPopular</label>
            <input
              className="bg-form-grey-background border-r-{10}"
              key="isPopular"
              type="text"
              placeholder="placeholder"
              onClick={handleChange}
              onChange={(event) => {
                setIsPopular(event.target.value);
              }}
            />
          </div>

          {/* <CustomInput
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
            onClick={handleChange}
            onChange={(event) => {
              setModel(event.target.value);
            }}
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
          /> */}

          <button
            className="bg-form-grey-background outline-8 outline-black ring-2"
            type="submit"
          >Submit
          </button>

        </form>

        {// Upload Images
        }

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

          {/* <div className="place-content-center w-full md:w-1/2 px-6  mb-6 md:mb-0 gap-x-3 overflow:hidden text-black bg-btn-blue flex flex-wrap">
          Uploading files

          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="multiple_files">Upload multiple files</label>
          <input
            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border
           border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="multiple_files"
            type="file"
            multiple
          />

        </div> */}
          <div className="justify-items-end">
            <Button />
          </div>
        </div>

      </div>

      {// Confirmation
        }
      <div className="w-1/2 py-6 mx-auto mb-6 text-black bg-white rounded-lg">
        <div className="mx-auto p-1 text-black bg-white text-xl text-left font-semibold">
          Confirmation
        </div>

        <p className="text-black bg-white pb-2">We are getting to the end. Just a few clicks and your rental is ready!</p>

        <div>
          <input type="checkbox" className="text-black" /> <label>I agree with sending an Marketing and newsletter emails. No spawm, promissed!</label>
        </div>

        <br />

        <div>
          <input type="checkbox" className="text-black" /> <label>I agree with our terms and conditions and privacy policy.</label>
        </div>
        <Button />
      </div>
    </>
  );
};
export default addCarForm;
