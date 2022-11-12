import { useEffect, createContext, useContext, useState } from 'react';

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

  console.log(filterState);

  const [numberOfCars, setNumberOfCars] = useState(size.width < 1900 ? 12 : 15);

  const filters = ['Sport', 'SUV', 'MPV', 'Sedan', 'Hackback', 'Coupe'];
  const capacity = [1, 2, 4, 8];

  const totalCars = carList.length;

  const showMoreCars = () => {
    console.log('show more cars');
    setNumberOfCars(numberOfCars * 2);
  };

  useEffect(() => {
    setNumberOfCars(windowSize.width < 1900 ? 12 : 15);
  }, [windowSize.width]);

  const filteredData = () => {
    const filterData = carList.filter(({ name, type, people, price }) => {
      if (filterState.checkedType.length === 0 && filterState.checkedCapacity.length === 0) {
        return filters.some((c) => c === type) && capacity.some((l) => l === people && price < filterState.checkedPrice);
      } if (filterState.checkedCapacity.length === 0) {
        return filterState.checkedType.some((c) => c === type) && capacity.some((l) => l === people) && price < filterState.checkedPrice;
      } if (filterState.checkedType.length === 0) {
        return filters.some((c) => c === type) && filterState.checkedCapacity.some((l) => l === people) && price < filterState.checkedPrice;
      }
      return filterState.checkedType.some((c) => c === type) && filterState.checkedCapacity.some((l) => l === people) && price < filterState.checkedPrice;
    });

    return filterData;
  };

  return (
    <div className="w-full flex">
      <Sidebar filterState={filterState} setFilterState={setFilterState} />
      <div className="p-4 w-full">
        <StatePicker windowSize={windowSize} />
        <div className="flex mt-4 justify-start flex-wrap gap-4">
          { filteredData().slice(0, numberOfCars).map((model, index) => (
            <div key={index} className="w-full md:max-w-48 lg:max-w-31 xl:max-w-24 3xl:max-w-19 md:flex-48 lg:flex-31 xl:flex-24 3xl:flex-19">
              <CarCard model={model.name} image={model.image} people={model.people} type={model.type} price={model.price} checkedCapacity={filterState.checkedCapacity} checkedType={filterState.checkedType} checkedPrice={filterState.checkedPrice} />
            </div>
          ))}
          {filteredData().length === 0 ? <p className="text-5xl p-12 m-auto">no cars matching your criterias</p> : null}
        </div>
        <div className="ulul my-16">
          <div>
            <Button handleClick={showMoreCars} text="Show more cars" textSize="text-sm" bgColor="bg-btn-blue" color="text-white" onClick={() => {}} margin="mx-auto" />
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
