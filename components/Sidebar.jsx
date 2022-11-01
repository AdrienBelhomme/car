/* eslint-disable import/no-cycle */
import { useState } from 'react';

import { Slider } from './index';

const Sidebar = () => {
  const [checked, setChecked] = useState({
    Sport: false,
    SUV: false,
    MPV: false,
    Sedan: false,
    Hatchback: false,
    Coupe: false,
  });

  const handleChange = (e) => {
    setChecked({ ...checked, [e.target.name]: e.target.checked });
  };

  const [personChecked, setPersonChecked] = useState({
    '2 Persons': false,
    '4 Persons': false,
    '6 Persons': false,
    '8 or More': false,
  });

  const handlePersonChange = (e) => {
    setPersonChecked({ ...personChecked, [e.target.name]: e.target.checked });
  };

  return (
    <div className="flex flex-col bg-white-color border-sidebar-border border-2 h-1400 w-360 ">
      <div className="text-side-title font-jakarta pl-8 pt-10">
        Search
      </div>
      <div className="items-center px-4 flex justify-center pt-7">
        <div className=" relative mr-3">
          <div className="absolute top-3 left-3 items-center">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
          </div>
          <input
            type="text"
            className="block p-2 pl-10 font-jakarta text-gray-900 bg-white rounded-full border border-search-border w-283"
            placeholder="Search by brand or title"
          />
        </div>
      </div>
      <div className="flex flex-col h-352 w-208 mt-14 mb-0 ">
        <div className="text-side-title font-jakarta pl-8 ">
          Type
        </div>
        {['Sport', 'SUV', 'MPV', 'Sedan', 'Coupe', 'Hatchback'].map((item, index) => (
          <div className="flex items-center mt-6 w-208" key={index}>
            <input name={item} id="default-checkbox" type="checkbox" value={checked} onChange={handleChange} className="ml-8 w-5 h-4 text-btn-blue bg-white rounded-md border-gray-300 focus:ring-checkbox-checked dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-checkbox" className="pl-2 text-lg font-semibold font-jakarta text-input-title dark:text-gray-300">{item}<span className="text-secondinary-light-300 font-medium font-jakarta"> ({index * 5})</span></label>
          </div>
        ))}
      </div>
      <div className="flex flex-col h-60 w-176 mt-14 mb-0  ">
        <div className="text-side-title font-jakarta pl-8 ">
          Capacity
        </div>
        {['2 Persons', '4 Persons', '6 Persons', '8 or More'].map((person, index) => (
          <div className="flex items-center  mt-7 " key={index}>
            <input name={person} id="default-checkbox" type="checkbox" value={personChecked} onChange={handlePersonChange} className="ml-8 w-5 h-4 text-btn-blue bg-white rounded-md border-gray-300 focus:ring-checkbox-checked dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-checkbox" className="pl-2 w-144 text-lg font-semibold font-jakarta text-input-title dark:text-gray-300">{person} <span className="text-secondinary-light-300 font-medium font-jakarta">({index * 5})</span></label>
          </div>
        ))}
      </div>
      <div className=" container flex flex-col h-104 w-296 mt-10 mb-10">
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
