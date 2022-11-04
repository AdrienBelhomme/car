import { Button, CarBanner, CarCard, StatePicker } from '../components';
import image from '../assets/index';

const CarRent = () => {
  const carList = ['Koenigsegg', 'Nissan GT - R', 'Rolls-Royce', 'Nissan GT - R', 'Koenigsegg', 'Koenigsegg'];
  const recommendedCar = ['Koenigsegg', 'Nissan GT - R', 'Rolls-Royce', 'All New Rush', 'All New Terio', 'CRV', 'New MGZS', 'Exclusive MGZS'];

  return (
    <div className=" p-6 md:p-16">
      <div className="flex flex-col gap-8 pt-8   md:flex-row  mt-124 bg-bg-color-car-app">
        <div className=" flex w-full ">
          <CarBanner
            title="The Best Platform for Car Rental"
            subtitle="Ease of doing a car rental safely and reliably. Of course at a low price."
            carImg={image.koenigsegg}
            card="bg-[#5CAFFC]"
            btnColor="bg-btn-blue"
          />
        </div>
        <div className=" hidden md:flex w-full ">
          <CarBanner
            title="Easy way to rent a car at a low price"
            subtitle="Providing cheap car rental services and safe and comfortable facilities."
            carImg={image.nissan}
            card="bg-btn-blue"
            btnColor="bg-[#5CAFFC]"
          />
        </div>
      </div>
      <div className="mt-[42px]">
        <StatePicker />
      </div>

      <div className="popular w-full mt-8 md:mt-[42px]">
        <div className="flex justify-between mx-5">
          <h1 className="flex text-secondinary-light-300 font-medium text-sm md:text-base md:font-semi-bold">
            Popular Car
          </h1>
          <button type="button" onClick={() => {}}>
            <h1 className="flex justify-end text-btn-blue text-xs font-semibold md:text-base">view all</h1>
          </button>
        </div>
        <div className="flex mt-[30px] justify-around w-full gap-[19px] overflow-x-auto md:flex-wrap md:gap-y-8 md:gap-x-8">
          {carList.slice(0, 4).map((model, index) => (
            <div key={index} className="min-w-[280px] flex-1"> <CarCard model={model} image={Object.values(image)[index]} /></div>
          ))}
        </div>
      </div>
      <div className="recommendation w-full mt-8 md:mt-[42px]">
        <h1 className="flex mx-5 text-secondinary-light-300 font-medium text-sm md:text-base md:font-semi-bold">
          Recommendation Car
        </h1>
        <div className="flex mt-[30px] justify-around w-full gap-y-5 flex-wrap md:gap-y-8 md:gap-x-8">
          {recommendedCar.map((model, index) => (
            <div key={index} className="min-w-[304px] flex-1"> <CarCard model={model} image={Object.values(image)[index]} /></div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-12 md:mt-16">
        <Button text="Show more cars" bgColor="bg-btn-blue" color="text-white" onClick={() => {}} />
      </div>
    </div>
  );
};
export default CarRent;

