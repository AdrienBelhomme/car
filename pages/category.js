import CarCard from '../components/CarCard';
import images from '../assets';

const category = () => {
  const carList = ['Koenigsegg', 'Nissan GT - R', 'Rolls-Royce'];
  return (
    <div className="flex ml-96">
      {carList.map((model, index) => (
        <div key={index} className="m-4">
          <CarCard model={model} image={Object.values(images)[index].src} />
        </div>
      ))}
    </div>
  );
};

export default category;
