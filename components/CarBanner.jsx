/* eslint-disable no-lone-blocks */

import Image from 'next/image';

import Button from './Button';

const CarBanner = (props) => {
  const { title, subtitle, carImg, card, btnColor, hidden } = props;
  return (
    <div className={`flex flex-col ${card} w-full rounded-xl p-5`}>
      <div className=" flex flex-col justify-start w-2/3 md:w-2/3 lg:w-full">
        <h1 className=" font-jakarta text-white-color font-semibold text-xs md:text-sm lg:text-3xl text-left md:font-semibold">{title}</h1>
        <h2 className="font-jakarta text-white-color font-medium text-base pt-3">{subtitle}</h2>
        <div className={`mt-4 ${hidden}`}>
          <Button text="Rental Car" bgColor={btnColor} onClick={() => {}} />
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 flex-shrink-1">
        <Image src={carImg} alt="carimage" priority className=" object-contain lg:scale-125" />
      </div>
    </div>
  );
};
export default CarBanner;

