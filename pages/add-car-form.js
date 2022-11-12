import Axios from 'axios';
import React, { useState } from 'react';
import { CustomInput } from '../components';

const addCarForm = () => {
  const [carTitle, setCarTitle] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState(0);

  const createCar = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();
    params.append('car-title', carTitle);
    Axios.post(
      'http://localhost:4000/posts',
      {
        method: 'post',
        url: 'http://localhost:4000/posts',
        data: params,
        carTitle,
        // model,
        // price,
      },
    ).then((response) => {
      alert('User Created');

      console.log(response);
    }).catch((err) => {
      console.log(err);
    });
  };

  const handleChange = (event) => {
    setCarTitle(event.target.value);
    // setModel(event.target.value);
    // setPrice(event.target.value);
  };
  return (
    <>
      <div className="grid place-items-center flex-row place-content-center -mx-3 mb-6 bg-gray-background border-r-{10}">
        <h1 className="text-justify text-2xl text-secondinary-default">Add a Car for Rent</h1>

        <form className="place-content-center w-full md:w-1/2 px-6 mb-6 md:mb-0 gap-x-3 text-black bg-white flex flex-wrap" action="/" method="post" onSubmit={createCar}>

          <CustomInput
            label="Car Name"
            type="text"
            id="last"
            placeholder="Car Title"
            onClick={handleChange}
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

        <div>
          Upload Images
        </div>
        <div>
          Uploading files
        </div>
      </div>
      <div>
        Confirmation
      </div>
    </>
  );
};
export default addCarForm;
