import { useEffect, useState } from 'react';

import { CarCard, Sidebar, StatePicker } from '../components';
import images, { koenigsegg, nissan, rollsRoyce, allNewRush } from '../assets';

const category = () => {
  const [checkedCapacity, setCheckedCapacity] = useState([]);
  const [checkedType, setCheckedType] = useState([]);

  const carList = [
    { name: 'Koenigsegg', type: 'Sport', people: 2, image: koenigsegg, price: 99.00 },
    { name: 'Nissan GT - R', type: 'SUV', people: 4, image: nissan, price: 89.00 },
    { name: 'Rolls-Royce', type: 'Hackback', people: 4, image: rollsRoyce, price: 109.00 },
    { name: 'All New Rush', type: 'Coupe', people: 2, image: allNewRush, price: 79.00 },
  ];

  const filters = ['Sport', 'SUV', 'MPV', 'Sedan', 'Hackback', 'Coupe'];
  const capacity = [1, 2, 4, 8];

  // calculate width to display the correct number of cars to match the flexbox display
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
    });

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

  const numberOfCars = size < 1900 ? 12 : 15;

  /* const checkedFilters = checkedFilter
    .filter((c) => c.checked)
    .map((c) => c.category);
  const checkedLevels = levelsChoices
    .filter((l) => l.checked)
    .map((l) => l.level);
 */
  const findSportFilter2 = checkedType.length === 0 ? carList : carList.filter((element) => checkedType.some((c) => c === element.type));

  const filteredData = () => {
    const allCheckedType = checkedType;
    const allCheckedCapacity = [...checkedCapacity];

    const filterData = carList.filter(({ name, type, people }) => {
      if (checkedType.length === 0 && checkedCapacity.length === 0) {
        console.log('checkedType tout vide');
        return filters.some((c) => c === type) && capacity.some((l) => l === people);
      } if (checkedCapacity.length === 0) {
        console.log('checkedCapacity vide');
        return checkedType.some((c) => c === type) && capacity.some((l) => l === people);
      } if (checkedType.length === 0) {
        console.log('checkedType vide');
        return filters.some((c) => c === type) && checkedCapacity.some((l) => l === people);
      }
      return checkedType.some((c) => c === type) && checkedCapacity.some((l) => l === people);
    });

    return filterData;
  };

  return (
    <div className="w-full flex">
      <Sidebar checkedCapacity={checkedCapacity} setCheckedCapacity={setCheckedCapacity} checkedType={checkedType} setCheckedType={setCheckedType} />
      <div className="p-4 w-full">
        <StatePicker />
        <div className="flex mt-4 justify-between flex-wrap gap-y-4">
          { filteredData().slice(0, numberOfCars).map((model, index) => (
            <div key={index} className="w-full md:w-49% lg:w-32% xl:w-24% 3xl:w-19%">
              <CarCard model={filteredData()[index].name} image={filteredData()[index].image} people={filteredData()[index].people} type={filteredData()[index].type} price={filteredData()[index].price} />
            </div>
          ))}
          {filteredData().length === 0 ? <p className="text-5xl p-12 m-auto">no cars matching your criterias</p> : null}
        </div>
      </div>
    </div>
  );
};

export default category;
