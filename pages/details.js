import { useRouter } from 'next/router';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faGasPump, faGear, faUser, faStar } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { Button, CarCard, Sidebar } from '../components';
import { koenigsegg, nissan, rollsRoyce, allNewRush } from '../assets';

const Stars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i += 1) {
    if (i <= rating) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-star h-4" />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-dark-900 dark:text-white h-4" />);
    }
  }
  return <div className="flex">{stars}</div>;
};

const details = () => {
  const router = useRouter();
  const { image, model, type, gas, category, people, price, setIsFavorite, isFavorite } = router.query;

  console.log(setIsFavorite);
  console.log(isFavorite);

  const [checkedCapacity, setCheckedCapacity] = useState([1, 2, 4]);
  const [checkedType, setCheckedType] = useState(['sport']);
  const [checkedPrice, setCheckedPrice] = useState(120);

  const numberOfCars = 10;

  const emptyHeart = () => (
    setIsFavorite((prev) => !prev)
  );

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

        <div className="flex items-center justify-between">

          <div className="flex items-center w-49% bg-white rounded-lg p-5">
            <div className="text-4xl font-bold font-jakarta text-center text-input-title">{model}</div>
            <div className="text-2xl font-medium font-jakarta text-center text-input-title">{type}</div>
            <div className="text-2xl font-medium font-jakarta text-center text-input-title">${price}</div>
          </div>

          <div className=" w-49% bg-white rounded-lg p-5">

            <div className="flex items-center justify-between">

              <div className="text-3xl font-bold font-jakarta text-center text-input-title">{model}</div>
              <div className="heart cursor-pointer" onClick={emptyHeart}>
                <FontAwesomeIcon
                  icon={faHeart}
                  className={`h-5 ${isFavorite ? 'text-error-default' : 'text-dark-900 dark:text-white'} 2xl:h-5`}
                />
              </div>
            </div>

            <div className="flex items-center mt-3">

              <div className="self-center cursor-pointer" onClick={emptyHeart}>
                <Stars rating={4} />
              </div>
              <div className="text-sm ml-4 font-jakarta text-center text-input-title">440+ reviewers</div>
            </div>

            <div className="flex items-center mt-8">
              <p className="text-xl font-jakarta text-input-title leading-9">NISMO has become the embodiment of Nissan's outstanding
                performance, inspired by the most unforgiving proving ground, the "race track".
              </p>
            </div>

            <div className="flex items-center mt-8 flex-wrap gap-y-3">
              <div className="flex items-center justify-between w-full">
                <div className="flex w-full">
                  <p className="tracking-tight text-xl leading-6 text-secondinary-light-300">TypeCar:</p>
                  <p className="tracking-tight text-xl font-bold leading-6 text-input-title ml-3">{type}</p>
                </div>
                <div className="flex w-full">
                  <p className="tracking-tight text-xl leading-6 text-secondinary-light-300">Capacity:</p>
                  <p className="tracking-tight text-xl font-bold leading-6 text-input-title ml-3">{capacity}</p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex w-full">
                  <p className="tracking-tight text-xl leading-6 text-secondinary-light-300">Steering:</p>
                  <p className="tracking-tight text-xl font-bold leading-6 text-input-title ml-3">{category}</p>
                </div>
                <div className="flex w-full">
                  <p className="tracking-tight text-xl leading-6 text-secondinary-light-300">Gasoline:</p>
                  <p className="tracking-tight text-xl font-bold leading-6 text-input-title ml-3">{gas}</p>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-between mt-10">
              <div className="flex text-base font-jakarta font-bold items-end">
                <p className="text-3xl font-bold">${price} /</p>
                <p className="text-secondinary-light-300 ml-1 font-jakarta">day</p>
              </div>
              <div>
                <Button bgColor="bg-btn-blue" text="Rent Now" className="lg:w-full" />
              </div>
            </div>

          </div>

        </div>

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
