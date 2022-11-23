import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CustomInput = (props) => {
  const { label, type, id, placeholder, name, eventName } = props;

  const [carTitle, setCarTitle] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState(0);
  const [people, setPeople] = useState('');
  const [carType, setCarType] = useState('');
  const [location, setLocation] = useState('');
  const [gas, setGas] = useState(0);
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');
  const [availabilityFrom, setAvailabilityFrom] = useState(new Date());
  const [availabilityTo, setAvailabilityTo] = useState(new Date());
  const [description, setDescription] = useState('');
  const [isPopular, setIsPopular] = useState('');

  const createCar = async (event) => {
    event.preventDefault();
    try {
      const carData = await axios.post('/api/car', {
        carTitle,
        model,
        price,
        people,
        carType,
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
    setCarType(event.target.value);
    setLocation(event.target.value);
    setGas(event.target.value);
    setPickupLocation(event.target.value);
    setDropOffLocation(event.target.value);
    setAvailabilityFrom(event.target.value);
    setAvailabilityTo(event.target.value);
    setDescription(event.target.value);
    setIsPopular(event.target.value);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2 text-form-title-color" htmlFor={eventName}>{label}</label>
      <input
        className="bg-form-grey-background border-r-{10}"
        autoComplete="off"
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
      />

    </div>

  );
};
export default CustomInput;
// module.exports = CustomInput;
// module.exports = { CustomInput, handleChange };
