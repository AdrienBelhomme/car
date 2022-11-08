import { useRouter } from 'next/router';
import { useState } from 'react';

import { CarCard, Sidebar } from '../components';
import { koenigsegg, nissan, rollsRoyce, allNewRush } from '../assets';

const details = ({ title }) => {
  const router = useRouter();
  const checkedCapacity = router.query;

  console.log(data);
  console.log(data.title);

  const [checkedCapacity, setCheckedCapacity] = useState([1, 2, 4]);
  const [checkedType, setCheckedType] = useState(['sport']);
  const [checkedPrice, setCheckedPrice] = useState(120);

  const numberOfCars = 10;

  const carList = [
    { name: 'Koenigsegg', type: 'Sport', people: 2, image: koenigsegg, price: 99.00 },
    { name: 'Nissan GT - R', type: 'SUV', people: 4, image: nissan, price: 89.00 },
    { name: 'Rolls-Royce', type: 'Hackback', people: 4, image: rollsRoyce, price: 109.00 },
    { name: 'All New Rush', type: 'Coupe', people: 2, image: allNewRush, price: 79.00 },
  ];

  const filters = ['Sport', 'SUV', 'MPV', 'Sedan', 'Hackback', 'Coupe'];
  const capacity = [1, 2, 4, 8];

  return (
    <div className="w-full flex">
      <Sidebar checkedPrice={checkedPrice} setCheckedPrice={setCheckedPrice} checkedCapacity={checkedCapacity} setCheckedCapacity={setCheckedCapacity} checkedType={checkedType} setCheckedType={setCheckedType} />
      <div className="p-4 w-full">

        <div className="flex mt-4 justify-between flex-wrap gap-y-4">
          { carList.map((model, index) => (
            <div key={index} className="w-full md:w-49% lg:w-32% xl:w-24% 3xl:w-19%">
              <CarCard model={model.name} image={model.image} people={model.people} type={model.type} price={model.price} />
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default details;
