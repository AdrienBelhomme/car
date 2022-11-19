import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, CarBanner, StatePicker, CarTypeList } from '../components';

// import { popularNew, recommendedCars } from '../public/dummyDatabase/CarData';
import image from '../assets/index';

const CarRent = () => {
  const [allCars, setAllCars] = useState();
  //   const [numberOfPopularCars, setNumberOfPopularCars] = useState(popularNew.cars.slice(0, 4));
  //   const [numberOfRecommendedCars, setNumberOfRecommendedCars] = useState(recommendedCars.cars.slice(0, 8));
  //   const totalCars = numberOfPopularCars.length + numberOfRecommendedCars.length;
  //   console.log('here', data);
  //   const showMoreCars = () => {
  //     setNumberOfPopularCars(popularNew.cars);
  //     setNumberOfRecommendedCars(recommendedCars.cars);
  //   };

  const fetchCars = async () => {
    try {
      const response = await axios.get('/api/car', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setAllCars(response.data);
      console.log(allCars);
    } catch (error) {
      console.log('Error', error);
    }
  };

  // get data
  useEffect(() => {
    fetchCars();
  }, []);

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
        <StatePicker />
      </div>
      <div>
        {allCars.map((car) => (
          <p>{car.carTitle}</p>
        ))}
      </div>
      <CarTypeList carData={allCars} scrollable="overflow-x-auto md:flex-wrap" />
      <CarTypeList noscroll="flex-wrap" />
      <div className="flex">
        <div className="flex justify-center mx-auto mt-12 md:mt-16">
          <Button text="Show more cars" bgColor="bg-btn-blue" color="text-white" />
        </div>
        <div className="flex self-end">
          <p className="flex text-secondinary-light-300 font-medium text-sm md:text-base md:font-semi-bold">
            Cars
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarRent;

