import React from 'react';

import { CarBanner } from '../components';
import image from '../assets/index';

const CarRent = () => (
  <div className="w-full h-screen mt-124 bg-bg-color-car-app">
    <div className="flex gap-x-8 pt-8 px-16 ">
      <CarBanner
        title="The Best Platform for Car Rental"
        subtitle="Ease of doing a car rental safely and reliably. Of course at a low price."
        carImg={image.koenigsegg}
        card="bg-[#5CAFFC]"
        btnColor="bg-btn-blue"
      />
      <CarBanner
        title="Easy way to rent a car at a low price"
        subtitle="Providing cheap car rental services and safe and comfortable facilities."
        carImg={image.nissangtr}
        card="bg-btn-blue"
        btnColor="bg-[#5CAFFC]"

      />
    </div>

  </div>

);

export default CarRent;
