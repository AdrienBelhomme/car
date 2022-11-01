/* eslint-disable no-lone-blocks */

import Image from 'next/image';

import Button from './Button';

const CarBanner = (props) => {
  const { title, subtitle, carImg, card, btnColor } = props;
  return (
    <div className={` flex flex-col ${card} w-640 h-360  border rounded-xl`}>
      <div className=" flex flex-col justify-start  pt-6 pl-6 max-w-xs ">
        <h1 className=" font-jakarta text-white-color font-semibold text-3xl text-left">{title}</h1>
        <h2 className=" font-jakarta text-white-color pt-4">{subtitle}</h2>
        <div className="pt-7">
          <Button text="Rental Car" bgColor={btnColor} onClick={() => {}} />
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 mb-4 flex-shrink-1">
        <Image src={carImg} width="406px" height="116px" alt="carimage" priority />
      </div>
    </div>
  );
};
export default CarBanner;

