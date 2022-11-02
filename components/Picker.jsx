import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useState } from 'react';

const Picker = ({ isPickup }) => {
  const [state, setState] = useState({
    location: '',
    date: '',
    time: '',
  });

  const [isMobile, setIsMobile] = useState(true);

  const handleInputChange = (e) => {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    setState({
      ...state, [name]: value,
    });
  };

  console.log(state);

  return (
    <div className="flex flex-col bg-white rounded-lg p-5">
      <div className="flex items-center mb-6">
        <span className={`rounded-full w-3 h-3 ${isPickup ? 'bg-btn-blue' : 'bg-drop-off'} mr-4 ml-1 ${isPickup ? 'shadow-dot-shadow' : 'shadow-drop-off-shad'}`} />
        <h4 className="font-jakarta font-semibold">{isPickup ? 'Pick-Up' : 'Drop-Off'}</h4>
      </div>
      <div className="flex justify-between">
        <div className="w-full">
          <p className="font-bold">Locations</p>
          <div className="flex items-center cursor-pointer mt-2">
            <input
              className="text-secondinary-light-300 text-xs font-light font-jakarta w-full"
              placeholder={isMobile ? 'New-York' : 'Select your city'}
              name="location"
              type="text"
              value={state.location}
              onChange={handleInputChange}
            />
            <FontAwesomeIcon icon={faChevronDown} className="w-3" />
          </div>
        </div>
        <div className="border-r border-picker mx-4" />
        <div className="w-full">
          <p className="font-bold">Date</p>
          <div className="flex items-center cursor-pointer mt-2">
            <input
              className="text-secondinary-light-300 text-xs font-light font-jakarta w-full"
              placeholder={isMobile ? '22 July' : 'Select your date'}
              name="date"
              type="text"
              value={state.date}
              onChange={handleInputChange}
            />
            <FontAwesomeIcon icon={faChevronDown} className="w-3" />
          </div>
        </div>
        <div className="border-r border-picker mx-4" />
        <div className="w-full">
          <p className="font-bold">Time</p>
          <div className="flex items-center cursor-pointer mt-2">
            <input
              className="text-secondinary-light-300 text-xs font-light font-jakarta w-full"
              placeholder={isMobile ? '07:00' : 'Select your time'}
              name="time"
              type="text"
              value={state.time}
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

/*
render() {
  return (
    <form>
      <label>
        Is going:
        <input
          name="isGoing"
          type="checkbox"
          checked={this.state.isGoing}
          onChange={this.handleInputChange} />
      </label>
      <br />
      <label>
        Number of guests:
        <input
          name="numberOfGuests"
          type="number"
          value={this.state.numberOfGuests}
          onChange={this.handleInputChange} />
      </label>
    </form>
  );
} */
