import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, CarBanner, StatePicker, CarTypeList } from '../components';

import image from '../assets/index';

const CarRent = () => {
  const [allCars, setAllCars] = useState([]);
  const [popularCars, setPopularCars] = useState([]);
  const [recommendedCars, setRecommendedCars] = useState([]);
  console.log(popularCars);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });
  const totalCars = popularCars.length + recommendedCars.length;

  const fetchCars = async () => {
    try {
      const response = await axios.get('/api/car', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.data;
      setAllCars(data.data);
      setPopularCars(data.data.slice(0, 4));
      setRecommendedCars(data.data.slice(5, 9));
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  function useWindowSize() {
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
        });
      }

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
  }

  const size = useWindowSize();

  return (
    <div className=" p-6 md:p-16">
      <div className="flex flex-col gap-8 pt-8   md:flex-row  mt-124 bg-bg-color-car-app">
        <div className=" flex w-full ">
          <CarBanner
            title="The Best Platform for Car Rental"
            subtitle="Ease of doing a car rental safely and reliably. Of course at a low price."
            carImg={image.koenigsegg}
            card="bg-[#5CAFFC]"
            btnColor="bg-btn-blue"
          />
        </div>
        <div className=" hidden md:flex w-full ">
          <CarBanner
            title="Easy way to rent a car at a low price"
            subtitle="Providing cheap car rental services and safe and comfortable facilities."
            carImg={image.nissan}
            card="bg-btn-blue"
            btnColor="bg-[#5CAFFC]"
          />
        </div>
      </div>
      <div className="mt-[42px]">
        <StatePicker windowSize={size} />
      </div>

      <CarTypeList carCategory="Popular Car" carData={popularCars} scrollable="overflow-x-auto md:flex-wrap" />
      <CarTypeList carCategory="Recommendation Car" carData={recommendedCars} noscroll="flex-wrap" />
      <div className="flex">
        <div className="flex justify-center mx-auto mt-12 md:mt-16">
          <Button text="Show more cars" bgColor="bg-btn-blue" color="text-white" handleClick={() => {}} />
        </div>
        <div className="flex self-end">
          <p className="flex text-secondinary-light-300 font-medium text-sm md:text-base md:font-semi-bold">
            {totalCars}Cars
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarRent;

