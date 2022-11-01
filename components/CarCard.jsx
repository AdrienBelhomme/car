import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faGasPump, faGear, faUsers } from '@fortawesome/free-solid-svg-icons';
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
    { name: gas, icon: faGasPump },
    { name: type, icon: faGear },
    { name: people, icon: faUsers },
  ];

  return (
    <div className="w-full md:w-300 bg-white rounded-lg p-6">
      <div className="flex justify-between">
        <div className="title">
          <h2 className="text-xl text-secondinary-default font-bold mb-1 font-jakarta">{model}</h2>
          <h3 className="text-secondinary-light-300 text-sm font-jakarta">{category}</h3>
        </div>
        <div className="heart cursor-pointer" onClick={emptyHeart}>
          <FontAwesomeIcon
            icon={faHeart}
            className={`h-5 ${isFavorite ? 'text-error-default' : 'text-dark-900 dark:text-white'}`}
          />
        </div>
      </div>
      <div className="flex md:block justify-between items-center mt-7 md:m-0">
        <div className="car relative w-48 md:w-full ml-3 md:ml-0 m-0 md:mt-10">
          <Image src={image} layout="fill" width={300} height={100} alt="car-sport" className="" />
          <div className="absolute top-5 md:top-12 w-full h-10 bg-car-shadow" />
        </div>
        <div className="icons flex justify-between m-0 md:mt-12 flex-col md:flex-row">

          {iconList.map((icon, index) => (
            <div key={index} className="flex mx-0 my-2 md:my-0">
              <div className="icon flex items-center">
                <FontAwesomeIcon icon={icon.icon} className="text-secondinary-light-300 h-5" />
                <p className="ml-2 text-secondinary-light-300 text-sm font-jakarta">{icon.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center mt-10 justify-between">
        <div className="price">
          <div className="flex items-center text-xl font-jakarta font-bold">
            <p>${price} /</p>
            <p className="text-secondinary-light-300 text-sm ml-1 font-jakarta">day</p>
          </div>
        </div>
        <div className="button">
          <Button text="Rent Now" />
        </div>

      </div>
    </div>
  );
};

export default CarCard;
