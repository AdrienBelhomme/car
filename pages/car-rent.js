import { CarBanner } from '../components';
import image from '../assets/index';

const CarRent = () => (
  <div className=" container flex flex-col gap-8 md:justify-center px-4 pt-8 mx-auto space-y-12 md:space-y-0 md:flex-row h-screen mt-124 bg-bg-color-car-app">
    <div className="item flex max-w-xl">
      <CarBanner
        title="The Best Platform for Car Rental"
        subtitle="Ease of doing a car rental safely and reliably. Of course at a low price."
        carImg={image.koenigsegg}
        card="bg-[#5CAFFC]"
        btnColor="bg-btn-blue"
      />
    </div>
    <div className=" item hidden md:flex  max-w-xl ">
      <CarBanner
        title="Easy way to rent a car at a low price"
        subtitle="Providing cheap car rental services and safe and comfortable facilities."
        carImg={image.nissangtr}
        card="bg-btn-blue"
        btnColor="bg-[#5CAFFC]"
      />
    </div>
  </div>
);

export default CarRent;

