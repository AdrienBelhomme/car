/* eslint-disable import/no-cycle */
import React from 'react';

import { CarCard } from './index';

const CarTypeList = ({ carData, scrollable, noscroll }) => (
  <div className="popular w-full mt-8 md:mt-[42px]">
    <div className="flex justify-between mx-5">
      <h1 className="flex text-secondinary-light-300 font-medium text-sm md:text-base md:font-semi-bold">
        {carData.type}
      </h1>
      <button type="button" onClick={() => {}}>
        <h1 className="flex justify-end text-btn-blue text-xs font-semibold md:text-base">view all</h1>
      </button>
    </div>
    <div className={`flex mt-[30px] justify-start w-full ${noscroll} gap-8 ${scrollable} `}>
      {carData.cars.map((car, index) => (
        <div key={car.model + index} className="min-w-[280px] flex-1"> <CarCard {...car} /></div>
      ))}
    </div>
  </div>
);

export default CarTypeList;

