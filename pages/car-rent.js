import { CarBanner, CarCard } from '../components';
import image from '../assets/index';

const CarRent = () => {
  const carList = ['Koenigsegg', 'Nissan GT - R', 'Rolls-Royce', 'Nissan GT - R'];
  return (
    <div className="container px-4 mx-auto py-0">

      <div className="flex flex-col gap-8 md:justify-center px-4 pt-8 mx-auto  md:flex-row  mt-124 bg-bg-color-car-app">
        <div className=" flex max-w-xl">
          <CarBanner
            title="The Best Platform for Car Rental"
            subtitle="Ease of doing a car rental safely and reliably. Of course at a low price."
            carImg={image.Koenigsegg}
            card="bg-[#5CAFFC]"
            btnColor="bg-btn-blue"
          />
        </div>
        <div className=" hidden md:flex  max-w-xl ">
          <CarBanner
            title="Easy way to rent a car at a low price"
            subtitle="Providing cheap car rental services and safe and comfortable facilities."
            carImg={image.nissan}
            card="bg-btn-blue"
            btnColor="bg-[#5CAFFC]"
          />
        </div>
      </div>
      <div className="container flex flex-col px-16 mx-auto items-center w-full">
        <h1 className="flex text-slate-900">
          Popular Car
        </h1>
        <div className="flex flex-col mt-8 md:flex-row gap-1 justify-center">

          {carList.map((model, index) => (
            <div key={index}> <CarCard model={model} image={Object.values(image)[index]} /></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarRent;

