import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useRef, useState } from 'react';

const Picker = ({ isPickup, pickupValue, setPickupValue, setDropoffValue, dropoffValue, setIsFocus }) => {
  const [isMobile, setIsMobile] = useState(true);

  const inputValueCity = useRef(null);
  const inputValueTime = useRef(null);
  const inputValueDate = useRef(null);

  const handleInputChange = (e) => {
    const { target } = e;
    const { value } = target;
    const { name } = target;
    return isPickup ? setPickupValue({ ...pickupValue, [name]: value }) : setDropoffValue({ ...dropoffValue, [name]: value });
  };

  const handleFocusDateInput = () => {
    setIsFocus(true);
  };

  const handleOutFocusDateInput = () => {
    setIsFocus(false);
  };

  /* const handlePlaceholderCity = () => {
    inputValueCity.current.placeholder = '';
  };
  const handlePlaceholderTime = () => {
    inputValueTime.current.placeholder = '';
  };

  const handlePlaceholderBlurTime = () => {
    inputValueTime.current.placeholder = 'Time';
  };

  const handlePlaceholderBlurCity = () => {
    inputValueCity.current.placeholder = 'City';
  }; */

  const handlePlaceholder = (ref) => {
    ref.current.placeholder = '';
  };

  const handlePlaceholderBluer = (ref, name) => {
    ref.current.placeholder = name;
  };

  return (
    <div className="flex flex-col bg-white rounded-lg p-5">
      <div className="flex items-center mb-6">
        <span className={`rounded-full w-3 h-3 ${isPickup ? 'bg-btn-blue' : 'bg-drop-off'} mr-4 ml-1 ${isPickup ? 'shadow-dot-shadow' : 'shadow-drop-off-shad'}`} />
        <h4 className="font-jakarta font-semibold">{isPickup ? 'Pick-Up' : 'Drop-Off'}</h4>
      </div>
      <div className="flex justify-between">
        <div className="w-full">
          <p className="font-bold xs-mobile:text-[10px]">Locations</p>
          <div className="flex items-center cursor-pointer mt-2">
            <input
              ref={inputValueCity}
              className="text-secondinary-light-300 text-xs xs-mobile:text-[10px] d:text-sm font-normal font-jakarta w-full h-6"
              placeholder={isMobile ? 'City' : 'Select your city'}
              onFocus={handlePlaceholderCity}
              onBlur={handlePlaceholderBlurCity}
              name="location"
              type="text"
              value={isPickup ? pickupValue.location : dropoffValue.location}
              onChange={handleInputChange}
            />
            <FontAwesomeIcon icon={faChevronDown} className="w-3" />
          </div>
        </div>
        <div className="border-r border-picker m-0-5% xs-mobile:m-0-3% lg:m-0-10%" />
        <div className="w-full">
          <p className="font-bold xs-mobile:text-[10px]">Date</p>
          <div className="flex items-center cursor-pointer mt-2">
            <input
              ref={inputValueDate}
              className="text-secondinary-light-300 text-xs xs-mobile:text-[10px] md:text-sm font-normal font-jakarta w-full h-6"
              placeholder={isMobile ? 'Date' : 'Select your date'}
              onFocus={handleFocusDateInput}
              onBlur={handleOutFocusDateInput}
              name="date"
              type="date"
              value={isPickup ? pickupValue.date : dropoffValue.date}
              onChange={handleInputChange}
            />
            <FontAwesomeIcon icon={faChevronDown} className="w-3" />
          </div>
        </div>
        <div className="border-r border-picker m-0-5% xs-mobile:m-0-3% lg:m-0-10%" />
        <div className="w-full">
          <p className="font-bold xs-mobile:text-[10px]">Time</p>
          <div className="flex items-center cursor-pointer mt-2">
            <input
              ref={inputValueTime}
              className="text-secondinary-light-300 text-xs xs-mobile:text-[10px] md:text-sm font-normal font-jakarta w-full h-6"
              placeholder={isMobile ? 'Time' : 'Select your time'}
              onFocus={handlePlaceholderTime}
              onBlur={handlePlaceholderBlurTime}
              name="time"
              type="text"
              value={isPickup ? pickupValue.time : dropoffValue.time}
              onChange={handleInputChange}
            />
            <FontAwesomeIcon icon={faChevronDown} className="w-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Picker;
