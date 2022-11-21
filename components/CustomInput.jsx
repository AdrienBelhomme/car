import React, { useEffect, useState } from 'react';

const CustomInput = (props) => {
  const { label, type, id, placeholder, name, eventName } = props;
  const [listOfCars, setListOfCars] = useState([]);
  const [carTitle, setCarTitle] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState(0);

  const handleChange = (event) => {
    setCarTitle(event.target.value);
    setModel(event.target.value);
  };
  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2 text-form-title-color" htmlFor={eventName}>{label}</label>
      <input
        className="bg-form-grey-background border-r-{10}"
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        onClick={handleChange}
        onChange={(event) => {
          setCarTitle(event.target.value);
          setModel(event.target.value);
        }}
        value={carTitle}
      />

    </div>

  );
};
export default CustomInput;
// module.exports = CustomInput;
// module.exports = { CustomInput, handleChange };
