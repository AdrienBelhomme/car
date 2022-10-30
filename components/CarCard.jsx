import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faGasPump, faGear, faUsers } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Image from 'next/image';

import images from '../assets';
import Button from './Button';

const CarCard = ({ gas = '90L', type = 'Manual', people = '2 people', price = '99.00' }) => {
  console.log('CarCard');
  return (
    <div className="w-full md:w-300 bg-white rounded-lg p-6">
      <div className="flex justify-between">
        <div className="title">
          <h2 className="text-xl text-secondinary-default font-bold mb-1 font-jakarta">Model</h2>
          <h3 className="text-secondinary-light-300 text-sm font-jakarta">Sport</h3>
        </div>
        <div className="heart text-error-default cursor-pointer" onClick={() => {}}>
          <FontAwesomeIcon className="h-6" icon={faHeart} />
        </div>
      </div>
      <div className="flex md:block justify-between items-center mt-7 md:m-0">
        <div className="car relative w-48 md:w-full ml-3 md:ml-0 m-0 md:mt-10">
          <Image src={images.car} layout="fill" width={300} height={100} alt="car-sport" className="" />
          <div className="absolute top-5 md:top-12 w-full h-10 bg-car-shadow" />
        </div>
        <div className="icons flex justify-between m-0 md:mt-12 flex-col md:flex-row">
          <div className="flex mx-0 my-2 md:my-0">
            <div className="icon flex items-center">
              <FontAwesomeIcon icon={faGasPump} className="text-secondinary-light-300 h-5" />
              <p className="ml-2 text-secondinary-light-300 text-sm font-jakarta">{gas}</p>
            </div>
          </div>
          <div className="flex mx-0 my-2 md:my-0">
            <div className="icon flex items-center">
              <FontAwesomeIcon icon={faGear} className="text-secondinary-light-300 h-5" />
              <p className="ml-2 text-secondinary-light-300 text-sm font-jakarta">{type}</p>
            </div>
          </div>
          <div className="flex mx-0 my-2 md:my-0">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faUsers} className="text-secondinary-light-300 h-5" />
              <p className="ml-2 text-secondinary-light-300 text-sm font-jakarta">{people}</p>
            </div>
          </div>
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
