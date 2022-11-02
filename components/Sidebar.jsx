/* eslint-disable import/no-cycle */
import { useState } from 'react';

import Image from 'next/image';
import searchIcon from '../assets/icons8-search.svg';
import { Slider } from './index';

const Sidebar = () => {
  const [checked, setChecked] = useState([]);
  console.log(checked);
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
    <div className="flex flex-col bg-white-color border-sidebar-border border-2 h-1400 w-360 ">
      <div className="text-side-title font-jakarta pl-8 pt-10">
        Search
      </div>
      <div className="items-center px-4 flex justify-center pt-7">
        <div className=" relative mr-3">
          <div className="absolute top-3 left-3 items-center">
            <Image src={searchIcon} width={20} height={20} alt="searchicon" />
          </div>
          <input
            type="text"
            className="block p-2 pl-10 font-jakarta text-gray-900 bg-white rounded-full border border-search-border w-283"
            placeholder="Search by brand or title"
          />
        </div>
      </div>
      {filters.map(({ title, options }) => (
        <div className="hidden container md:flex flex-col w-full mt-14 mb-0 " key={title}>
          <div className="text-side-title font-jakarta pl-8 ">
            {title}
          </div>
          {options.map((item, index) => (
            <div className="flex items-center mt-6 " key={index}>
              <input name={item} id="default-checkbox" type="checkbox" value={item} onChange={handleChecked} className="ml-8 w-5 h-4 text-btn-blue bg-white rounded-md border-gray-300 focus:ring-checkbox-checked dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="pl-2 text-lg font-semibold font-jakarta text-input-title dark:text-gray-300">{item}<span className="text-secondinary-light-300 font-medium font-jakarta"> ({index * 5})</span></label>
            </div>
          ))}
        </div>
      ))}
      <div className="hidden md:flex container flex-col w-full mt-10 mb-10">
        <div className="text-side-title font-medium font-jakarta pl-8 pt-10">
          Price
        </div>
        <div className="App">
          <Slider />
        </div>
        <div className="pl-8 mt-4 font-jakarta text-input-title font-semibold"> Max $100.00</div>
      </div>
    </div>
  );
};
export default Sidebar;
