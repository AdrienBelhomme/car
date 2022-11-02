import { CarCard, Picker } from '../components';
import images from '../assets';

const category = () => {
  const carList = ['Koenigsegg', 'Nissan GT - R', 'Rolls-Royce'];
  return (
    <div className="ml-96">
      <Picker />
      <div className="flex">
        {carList.map((model, index) => (
          <div key={index} className="m-4">
            <CarCard model={model} image={Object.values(images)[index].src} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default category;
