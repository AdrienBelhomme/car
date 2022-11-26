// import Axios from 'axios';
// import React, { useState } from 'react';

// const createCar = () => {
//   Axios.post('http://localhost:3000/createCar', {
//     carTitle,
//     model,
//     price,
//   }).then((response) => {
//     alert('User Created');
//   });
// };

// const handleChange = (event) => {
//   setCarTitle(event.target.value);
//   setModel(event.target.value);
//   setPrice(event.target.value);
// };

const CustomInput = (props) => {
  const { label, type, key, placeholder, value, onHandleChange } = props;

  return (
    <div className="mb-4">
      <label className="block text-base font-bold mb-2 text-form-title-color">{label}</label>
      <input
        className="bg-form-grey-background border-r-{10} text-left pl-8 pb-1 rounded w-96 h-14"
        autoComplete="off"
        key={key}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onHandleChange}
      />

    </div>

  );
};
export default CustomInput;
