/* eslint-disable no-lone-blocks */

import Image from 'next/image';

import Button from './Button';

const CarBanner = (props) => {
  const { title, subtitle, carImg, card, btnColor } = props;
  return (
    <div className={`${card} w-640 h-360  pl-6 pt-6 card border rounded-xl `}>
      <div className="justify-start w-284 h-208 flex flex-wrap flex-col">
        <h1 className="font-jakarta text-white-color font-semibold text-3xl">{title}</h1>
        <h2 className="font-jakarta text-white-color pt-4">{subtitle}</h2>
        <div className="pt-5">
          <Button text="Rental Car" bgColor={btnColor} />
        </div>
      </div>
      <div>
        <Image src={carImg} width="406px" height="116px" alt="carimage" priority />
      </div>
    </div>
  );
};
export default CarBanner;

