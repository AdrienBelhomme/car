import { CarCard, Sidebar, StatePicker } from '../components';
import images from '../assets';

const category = () => {
  const carList = ['Koenigsegg', 'Nissan GT - R', 'Rolls-Royce', 'All New Rush'];

  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="p-4 md:p-8 w-full">
        <StatePicker />
        <div className="flex mt-4 justify-between flex-wrap gap-y-4">
          {carList.map((model, index) => (
            <div key={index} className="w-full md:w-49% lg:w-32% xl:w-24% 3xl:w-19%">
              <CarCard model={model} image={Object.values(images)[index].src} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default category;
