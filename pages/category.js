import { useEffect, useState } from 'react';

import { Button, CarCard, Sidebar, StatePicker } from '../components';
import { koenigsegg, nissan, rollsRoyce, allNewRush } from '../assets';

const category = () => {
  // calculate width to display the correct number of cars to match the flexbox display
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

  const [checkedCapacity, setCheckedCapacity] = useState([]);
  const [checkedType, setCheckedType] = useState([]);
  const [checkedPrice, setCheckedPrice] = useState(120);
  const [numberOfCars, setNumberOfCars] = useState(size.width < 1900 ? 12 : 15);

  useEffect(() => {
    console.log('useEffect');
    setNumberOfCars(size.width < 1900 ? 12 : 15);
    console.log(numberOfCars);
  }, [size.width]);

  const carList = [
    { name: 'Koenigsegg', type: 'Sport', people: 2, image: koenigsegg, price: 99.00 },
    { name: 'Nissan GT - R', type: 'SUV', people: 4, image: nissan, price: 89.00 },
    { name: 'Rolls-Royce', type: 'Hackback', people: 4, image: rollsRoyce, price: 109.00 },
    { name: 'Rolls-Royce', type: 'Hackback', people: 4, image: rollsRoyce, price: 109.00 },
    { name: 'Rolls-Royce', type: 'Hackback', people: 4, image: rollsRoyce, price: 109.00 },
    { name: 'Rolls-Royce', type: 'Hackback', people: 4, image: rollsRoyce, price: 109.00 },
    { name: 'All New Rush', type: 'Coupe', people: 2, image: allNewRush, price: 79.00 },
    { name: 'All New Rush', type: 'Coupe', people: 2, image: allNewRush, price: 79.00 },
    { name: 'All New Rush', type: 'Coupe', people: 2, image: allNewRush, price: 79.00 },
    { name: 'All New Rush', type: 'Coupe', people: 2, image: allNewRush, price: 79.00 },
    { name: 'All New Rush', type: 'Coupe', people: 2, image: allNewRush, price: 79.00 },
    { name: 'All New Rush', type: 'Coupe', people: 2, image: allNewRush, price: 79.00 },
    { name: 'All New Rush', type: 'Coupe', people: 2, image: allNewRush, price: 79.00 },
    { name: 'All New Rush', type: 'Coupe', people: 2, image: allNewRush, price: 79.00 },
    { name: 'All New Rush', type: 'Coupe', people: 2, image: allNewRush, price: 79.00 },
    { name: 'All New Rush', type: 'Coupe', people: 2, image: allNewRush, price: 79.00 },
    { name: 'All New Rush', type: 'Coupe', people: 2, image: allNewRush, price: 79.00 },
    { name: 'All New Rush', type: 'Coupe', people: 2, image: allNewRush, price: 79.00 },
    { name: 'All New Rush', type: 'Coupe', people: 2, image: allNewRush, price: 79.00 },
    { name: 'All New Rush', type: 'Coupe', people: 2, image: allNewRush, price: 79.00 },
    { name: 'All New Rush', type: 'Coupe', people: 2, image: allNewRush, price: 79.00 },
    { name: 'All New Rush', type: 'Coupe', people: 2, image: allNewRush, price: 79.00 },
    { name: 'All New Rush', type: 'Coupe', people: 2, image: allNewRush, price: 79.00 },
  ];

  const filters = ['Sport', 'SUV', 'MPV', 'Sedan', 'Hackback', 'Coupe'];
  const capacity = [1, 2, 4, 8];

  const totalCars = carList.length;

  const showMoreCars = () => {
    console.log('show more cars');
    setNumberOfCars(numberOfCars * 2);
  };

  const filteredData = () => {
    const priceSet = checkedPrice;

    const filterData = carList.filter(({ name, type, people, price }) => {
      if (checkedType.length === 0 && checkedCapacity.length === 0) {
        return filters.some((c) => c === type) && capacity.some((l) => l === people && price < priceSet);
      } if (checkedCapacity.length === 0) {
        return checkedType.some((c) => c === type) && capacity.some((l) => l === people) && price < priceSet;
      } if (checkedType.length === 0) {
        return filters.some((c) => c === type) && checkedCapacity.some((l) => l === people) && price < priceSet;
      }
      return checkedType.some((c) => c === type) && checkedCapacity.some((l) => l === people) && price < priceSet;
    });

    return filterData;
  };

  return (
    <div className="w-full flex">
      <Sidebar checkedPrice={checkedPrice} setCheckedPrice={setCheckedPrice} checkedCapacity={checkedCapacity} setCheckedCapacity={setCheckedCapacity} checkedType={checkedType} setCheckedType={setCheckedType} />
      <div className="p-4 w-full">
        <StatePicker windowSize={windowSize} />
        <div className="flex mt-4 justify-between flex-wrap gap-y-4">
          { filteredData().slice(0, numberOfCars).map((model, index) => (
            <div key={index} className="w-full md:w-49% lg:w-32% xl:w-24% 3xl:w-19%">
              <CarCard model={filteredData()[index].name} image={filteredData()[index].image} people={filteredData()[index].people} type={filteredData()[index].type} price={filteredData()[index].price} />
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
