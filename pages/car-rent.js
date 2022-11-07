import { Button, CarBanner, StatePicker, CarTypeList } from '../components';
import image from '../assets/index';

const popularNew = {
  type: 'Popular',
  cars: [
    {
      image: image.nissan,
      model: 'Ferrari',
      category: 'Sport',
      gas: '90L',
      type: 'Manual',
      people: '2 people',
      price: '99.00',
    },
    {
      image: image.koenigsegg,
      model: 'Ferrari',
      category: 'Sport',
      gas: '90L',
      type: 'Manual',
      people: '2 people',
      price: '99.00',
    },
  ],
};

const CarRent = () => (
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
    <CarTypeList carData={popularNew} scrollable="overflow-x-auto md:flex-wrap" />
    <div className="flex justify-center items-center mt-12 md:mt-16">
      <Button text="Show more cars" bgColor="bg-btn-blue" color="text-white" onClick={() => {}} />
    </div>
  </div>
);

export default CarRent;

