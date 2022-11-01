import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useState } from 'react';

import { CarCard, Picker } from '../components';
import images from '../assets';

const category = () => {
  const carList = ['Koenigsegg', 'Nissan GT - R', 'Rolls-Royce', 'All New Rush'];
  const [isPickup, setIsPickup] = useState(true);

  const inversePicker = () => {
    console.log('lcik');
    return (
      <div onClick={() => console.log('click!')} className="flex bg-btn-blue rounded-md h-16 w-16 items-center cursor-pointer justify-center m-auto absolute inset-0">
        <FontAwesomeIcon icon={faArrowsRotate} color="white" className="h-6" />
      </div>
    );
  };

  return (
    <div className="ml-96 p-8">
      <div className="flex relative w-full">
        <div className="mr-12 ml-4"><Picker isPickup /></div>
        {inversePicker()}
        <Picker isPickup={false} />
      </div>

      <div className="flex mt-8 justify-center flex-wrap">
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
