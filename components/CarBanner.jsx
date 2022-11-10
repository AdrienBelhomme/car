/* eslint-disable no-lone-blocks */

import Image from 'next/image';

import Button from './Button';

const CarBanner = (props) => {
  const { title, subtitle, carImg, card, btnColor } = props;
  return (
    <div className={`flex flex-col ${card} w-full rounded-xl`}>
      <div className=" flex flex-col justify-start w-2/3 md:w-2/3 lg:w-1/2 pt-4 pl-4 md:pt-6 md:pl-6">
        <h1 className=" font-jakarta text-white-color  font-semibold text-base text-left md:text-base md:font-semibold">{title}</h1>
        <h2 className=" font-jakarta text-white-color  font-medium text-xs pt-3">{subtitle}</h2>
        <div className="pt-4">
          <Button text="Rental Car" bgColor={btnColor} onClick={() => {}} />
        </div>
      </div>
      <div className="flex justify-center items-center mt-[26px]  mb-1 md:mb-5 md:mt-0.5 lg:pt-2 flex-shrink-1">
        <Image src={carImg} alt="carimage" priority className=" object-contain lg:scale-125" />
      </div>
    </div>
  );
};
export default CarBanner;

