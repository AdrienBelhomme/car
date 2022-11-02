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
      <div onClick={() => console.log('click!')} className="flex bg-btn-blue rounded-md h-12 xl:h-14 2xl:h-16 w-12 xl:w-14 2xl:w-16 items-center cursor-pointer justify-center m-auto absolute inset-0 z-50">
        <FontAwesomeIcon icon={faArrowsRotate} color="white" className="h-6" />
      </div>
    );
  };

  return (
    <div className="p-4 md:p-8">

      <div className="pickers w-full flex gap-y-4 flex-wrap justify-between relative">

        <div className="flex relative w-full md:w-49%">
          <div className="w-full"><Picker isPickup /></div>
        </div>
        {inversePicker()}
        <div className="flex relative w-full md:w-49%">
          <div className="w-full"><Picker isPickup={false} /></div>
        </div>
      </div>

      <div className="flex mt-4 justify-between flex-wrap gap-y-4">
        {carList.map((model, index) => (
          <div key={index} className="w-full md:w-49% lg:w-32% xl:w-24% 3xl:w-19%">
            <CarCard model={model} image={Object.values(images)[index].src} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default category;
