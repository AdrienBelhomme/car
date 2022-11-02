/* eslint-disable import/no-cycle */
import { useState } from 'react';

import { Slider, Searchbar } from './index';

const Sidebar = () => {
  const [checked, setChecked] = useState([]);

  const filters = [
    {
      title: 'Type',
      options: ['Sport', 'SUV', 'MPV', 'Sedan', 'Hackback', 'Coupe'],
    },
    {
      title: 'Capacity',
      options: ['2 Persons', '4 Persons', '6 Persons', '8 or More'],
    }];

  const handleChecked = (e) => {
    const newChecks = [...checked];
    if (e.target.checked)setChecked([...newChecks, e.target.value]);
    else {
      newChecks.splice(checked.indexOf(e.target.value), 1);
      setChecked([...newChecks]);
    }
  };

  return (
    <div className="flex flex-col bg-white-color border-sidebar-border border-2 max-h-[1400px] max-w-[360px] ">
      <Searchbar />
      {filters.map(({ title, options }) => (
        <div className="hidden container md:flex flex-col w-full mt-14" key={title}>
          <div className="text-side-title font-jakarta pl-8 ">
            {title}
          </div>
          {options.map((item, index) => (
            <div className="flex items-center mt-6 " key={index}>
              <input name={item} id="default-checkbox" type="checkbox" value={item} onChange={handleChecked} className="ml-8 w-5 h-4 accent-btn-blue text-secondinary-light-300 bg-white rounded-md border-secondinary-light-300 focus:ring-checkbox-checked dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="pl-2 text-lg font-semibold font-jakarta text-input-title dark:text-gray-300">{item}<span className="text-secondinary-light-300 font-medium font-jakarta"> ({index * 5})</span></label>
            </div>
          ))}
        </div>
      ))}
      <div className="hidden md:flex container flex-col w-full mt-14 mb-10">
        <div className="text-side-title font-medium font-jakarta pl-8 ">
          Price
        </div>
        <div className="App mt-8 px-8">
          <Slider />
        </div>
        <div className="pl-8 mt-4 font-jakarta text-input-title font-semibold"> Max $100.00</div>
      </div>
    </div>
  );
};
export default Sidebar;

