import { useEffect, createContext, useContext, useState } from 'react';
import axios from 'axios';

import Link from 'next/link';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config.js';

import { Button, CarCard, Sidebar, StatePicker } from '../components';
import { koenigsegg, nissan, rollsRoyce, allNewRush } from '../assets';
import carList from '../constants/carList';
import { useThemeContext } from '../context/filtersState';

const category = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

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

  const [filterState, setFilterState] = useThemeContext();

  const [numberOfCars, setNumberOfCars] = useState(size.width < 1900 ? 12 : 15);

  const filters = ['sport', 'SUV', 'MPV', 'sedan', 'hackback', 'coupe', 'family', 'Family', 'Sedan', 'Hackback', 'Coupe', 'Sport', 'Suv', 'Mpv'];
  const capacity = [1, 2, 4, 6, 8];

  const showMoreCars = () => {
    setNumberOfCars(numberOfCars * 2);
  };

  useEffect(() => {
    setNumberOfCars(windowSize.width < 1900 ? 12 : 15);
  }, [windowSize.width]);

  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    try {
      const response = await axios.get('/api/car', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.data;
      console.log('data', data);
      setCars(data.data);
    } catch (error) {
      console.log('Error', error);
    }
  };

  // get data
  useEffect(() => {
    fetchCars();
  }, []);

  const totalCars = cars.length;

  /* carTitle: "Ferrari"
category: "Sport"
gas: 90
location: "not available"
model: "Ferrari"
people: 2
price: 99
type: "Manual"

name: 'Koenigsegg', type: 'Sport', people: 2, image: koenigsegg, price: 99.00, description: 'NISMO has become the embodiment of Nissan\'s outstanding performance, inspired by the most unforgiving proving ground, the "race track".', text: 'Sports car with the best design and acceleration', id: 0, subtitle */

  const filteredData = () => {
    const filterData = cars.filter(({ category: cat, people, price }) => {
      if (filterState.checkedType.length === 0 && filterState.checkedCapacity.length === 0) {
        return filters.some((c) => c === cat) && capacity.some((l) => l === people && price < filterState.checkedPrice);
      } if (filterState.checkedCapacity.length === 0) {
        return filterState.checkedType.some((c) => c === cat) && capacity.some((l) => l === people) && price < filterState.checkedPrice;
      } if (filterState.checkedType.length === 0) {
        return filters.some((c) => c === cat) && filterState.checkedCapacity.some((l) => l === people) && price < filterState.checkedPrice;
      }

      return filterState.checkedType.some((c) => c === cat) && filterState.checkedCapacity.some((l) => l === people) && price < filterState.checkedPrice;
    });

    return filterData;
  };

  const hidden = () => {
    if (numberOfCars > totalCars) {
      return 'hidden';
    }
    return '';
  };

  return (
    <div className="w-full flex">
      <Sidebar filterState={filterState} setFilterState={setFilterState} />
      <div className="p-4 w-full">
        <StatePicker windowSize={windowSize} />
        <div className="flex mt-4 justify-start flex-wrap gap-4">
          { filteredData().slice(0, numberOfCars).map((model, index) => (
            <div key={index} className="w-full md:max-w-49 lg:max-w-32 xl:max-w-25 3xl:max-w-20 md:flex-48 lg:flex-31 xl:flex-23 3xl:flex-19">
              <CarCard model={model.carTitle} type={model.type} image={model.image} people={model.people} category={model.category} price={model.price} checkedCapacity={filterState.checkedCapacity} checkedType={filterState.checkedType} checkedPrice={filterState.checkedPrice} />
            </div>
          ))}
          {filteredData().length === 0 ? <p className="text-5xl p-12 m-auto">no cars matching your criterias</p> : null}
        </div>
        <div className="ulul my-16">
          <div className={`${hidden()}`}>
            <Button handleClick={showMoreCars} text="Show more cars" textSize="text-sm" bgColor="bg-btn-blue" color="text-white" margin="mx-auto" />
          </div>
          <div className="lastchild self-center">
            <p className="text-secondinary-light-300 font-jakarta font-bold">{totalCars} cars</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default category;
