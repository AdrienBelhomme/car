import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, CarBanner, StatePicker, CarTypeList } from '../components';

import image from '../assets/index';

const CarRent = () => {
  const [allCars, setAllCars] = useState([]);
  const [initialDisplay, setInitialDisplay] = useState(true);

  const fetchCars = async () => {
    try {
      const response = await axios.get('/api/car', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.data;
      setAllCars(data.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const filterPopularCars = allCars.filter((car) => car.tag === 'popular');
  const initialPopularCars = allCars.filter((car) => car.tag === 'popular').slice(0, 3);
  const filterRecommendedCars = allCars.filter((car) => car.tag === 'recommended');
  const initialRecommendedCars = filterRecommendedCars.slice(0, 2);
  const totalPopAndRecCars = filterPopularCars.length + filterRecommendedCars.length;
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  const showMoreCars = () => {
    setInitialDisplay(!initialDisplay);
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

  const hidden = () => {
    if (filterPopularCars.length + filterRecommendedCars.length === totalPopAndRecCars.length) {
      return 'hidden';
    }
    return '';
  };

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
      <CarTypeList carCategory="Popular Car" carData={initialDisplay ? filterPopularCars : initialPopularCars} scrollable="overflow-x-auto md:flex-wrap" />
      <CarTypeList carCategory="Recommendation Car" carData={initialDisplay ? filterRecommendedCars : initialRecommendedCars} noscroll="flex-wrap" />
      <div className="flex">
        <div className={`flex justify-center mx-auto mt-12 md:mt-16 ${hidden}`}>
          <Button text={initialDisplay ? 'Show Less Cars' : ' Show More Cars'} bgColor="bg-btn-blue" color="text-white" handleClick={showMoreCars} />
        </div>
        <div className="flex self-end">
          <p className="flex text-secondinary-light-300 font-medium text-sm md:text-base md:font-semi-bold">
            {initialDisplay ? totalPopAndRecCars : initialPopularCars.length + initialRecommendedCars.length } Cars
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarRent;

