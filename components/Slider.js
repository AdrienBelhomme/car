import { useState } from 'react';
import ReactSlider from 'react-slider';

const Slider = ({ price, setPrice }) => {
  const handleChange = (value) => {
    setPrice(value);
  };

  return (
    <ReactSlider
      value={price}
      onChange={handleChange}
      min={50}
      max={120}
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
    />
  );
};

export default Slider;
