import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faGasPump, faGear, faUser } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Image from 'next/image';
import { useState } from 'react';

import images from '../assets';
import Button from './Button';

const CarCard = ({ image = images.nissan, model = 'Model', category = 'Sport', gas = '90L', type = 'Manual', people = '2 people', price = '99.00' }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const emptyHeart = () => (
    setIsFavorite((prev) => !prev)
  );

  const iconList = [
    { name: gas, icon: images.gas.src },
    { name: type, icon: images.wheel.src },
    { name: people, icon: images.user.src },
  ];

  console.log(iconList);
  console.log(iconList[0].name);
  console.log(iconList[0].icon);

  return (
    <div className="w-full bg-white rounded-lg p-5">
      <div className="flex justify-between">
        <div className="title">
          <h2 className="text-xl text-secondinary-default font-bold mb-1 font-jakarta">{model}</h2>
          <h3 className="text-secondinary-light-300 text-sm font-jakarta">{category}</h3>
        </div>
        <div className="heart cursor-pointer" onClick={emptyHeart}>
          <FontAwesomeIcon
            icon={faHeart}
            className={`h-5 ${isFavorite ? 'text-error-default' : 'text-dark-900 dark:text-white'} 2xl:h-5`}
          />
        </div>
      </div>
      <div className="flex md:block justify-around items-center mt-7 md:m-0">
        <div className="car relative w-3/5 md:w-11/12 m-0 md:mt-10 md:ml-auto md:mr-auto">
          <Image src={image} layout="fill" width={300} height={100} alt="car-sport" className="w-full" />
          <div className="absolute top-1/3 md:top-12 w-full h-4/5 bg-car-shadow" />
        </div>
        <div className="icons flex justify-between m-0 md:mt-8 flex-col md:flex-row h-16">

          {iconList.map((icon, index) => (
            <div key={index} className="flex">
              <div className="icon flex items-center">
                <Image src={icon.icon} layout="fill" width={17} height={17} alt={icon.name} className="text-secondinary-light-300 md:w-6" />
                <p className="ml-2 text-secondinary-light-300 text-xs md:text-sm font-jakarta">{icon.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center mt-10 md:mt-8 justify-between">
        <div className="price">
          <div className="flex items-center text-base font-jakarta font-bold">
            <p>${price} /</p>
            <p className="text-secondinary-light-300 text-sm ml-1 font-jakarta">day</p>
          </div>
        </div>
        <div className="button w-auto text-base">
          <Button text="Rent Now" className="lg:w-full" />
        </div>

      </div>
    </div>
  );
};

export default CarCard;
