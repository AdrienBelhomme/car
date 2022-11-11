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
  const { label, type, id, placeholder } = props;

  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2 text-form-title-color">{label}</label>
      <input
        className="bg-form-grey-background border-r-{10}"
        type={type}
        id={id}
        placeholder={placeholder}
      />

    </div>

  );
};
export default CustomInput;
// module.exports = { CustomInput, handleChange };
