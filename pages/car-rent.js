import { useState, useEffect } from 'react';
import axios from 'axios';

import { Button, CarBanner, StatePicker, CarTypeListHome } from '../components';
import image from '../assets/index';

const CarRent = () => {
  const [popularCars, setPopularCars] = useState([]);
  const [recommendedCars, setRecommendedCars] = useState([]);
  const [displayNumberOfCars, setDisplayNumberOfCars] = useState(true);

  const fetchCars = async () => {
    try {
      const popularCarResponse = await axios.get('/api/cartype?tag=popular', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const recommendedCarResponse = await axios.get('/api/cartype?tag=recommended', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const popularCarData = await popularCarResponse.data;
      const recommendedCarData = await recommendedCarResponse.data;
      setPopularCars(popularCarData.data);
      setRecommendedCars(recommendedCarData.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });
  const initialPopularCarsDisplay = popularCars.slice(0, 3);
  const initialRecommendedCarsDisplay = recommendedCars.slice(0, 2);
  const totalPopAndRecCars = popularCars.length + recommendedCars.length;
  const showMoreCars = () => {
    setDisplayNumberOfCars(!displayNumberOfCars);
  };

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
        <div style={{ backgroundImage: `url(${image.banner2.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }} className=" bg-cover rounded-xl w-full ">
          <CarBanner
            title="The Best Platform for Car Rental"
            subtitle="Ease of doing a car rental safely and reliably. Of course at a low price."
            carImg={image.koenigsegg}
            card="transparent"
            btnColor="bg-btn-blue"
          />
        </div>
        <div style={{ backgroundImage: `url(${image.banner.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }} className=" bg-cover rounded-xl hidden md:flex w-full ">
          <CarBanner
            title="Easy way to rent a car at a low price"
            subtitle="Providing cheap car rental services and safe and comfortable facilities."
            carImg={image.nissan}
            card="transparent"
            btnColor="bg-[#5CAFFC]"
          />
        </div>
      </div>
      <div className="mt-[42px]">
        <StatePicker windowSize={size} />
      </div>
      <CarTypeListHome carCategory="Popular Car" carData={displayNumberOfCars ? initialPopularCarsDisplay : popularCars} scrollable="overflow-x-auto md:flex-wrap" />
      <CarTypeListHome carCategory="Recommendation Car" carData={recommendedCars} noscroll="flex-wrap" />
      <div className="flex">
        <div className="flex justify-center mx-auto mt-12 md:mt-16">
          <Button text={displayNumberOfCars ? ' Show More Cars' : 'Show Less Cars'} bgColor="bg-btn-blue" color="text-white" handleClick={showMoreCars} />
        </div>
        <div className="flex self-end">
          <p className="flex text-secondinary-light-300 font-medium text-sm md:text-base md:font-semi-bold">
            {displayNumberOfCars ? initialPopularCarsDisplay.length + initialRecommendedCarsDisplay.length : totalPopAndRecCars} Cars
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarRent;

