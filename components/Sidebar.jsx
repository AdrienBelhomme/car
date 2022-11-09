/* eslint-disable import/no-cycle */
import { useState } from 'react';

import { Slider, Searchbar } from './index';

const Sidebar = ({ checkedPrice, setCheckedPrice, checkedCapacity, checkedType, setCheckedCapacity, setCheckedType }) => {
  const filters = [
    {
      title: 'Type',
      options: ['Sport', 'SUV', 'MPV', 'Sedan', 'Hackback', 'Coupe'],
    },
    {
      title: 'Capacity',
      options: [2, 4, 6, 8],
    }];

  const handleChecked = (e) => {
    const capacityFilter = [...checkedCapacity];
    const typeFilter = [...checkedType];
    const inputValue = e.target.value;
    const inputValueType = inputValue.length === 1 ? +inputValue : inputValue;
    if (e.target.checked) {
      if (typeof inputValueType === 'number') { setCheckedCapacity([...capacityFilter, inputValueType]); } else { setCheckedType([...typeFilter, inputValueType]); }
    } else {
      if (typeof inputValueType === 'number') capacityFilter.splice(checkedCapacity.indexOf(inputValueType), 1);
      else { typeFilter.splice(checkedType.indexOf(inputValueType), 1); }
      // eslint-disable-next-line no-unused-expressions
      typeof inputValueType === 'number' ? setCheckedCapacity([...capacityFilter]) : setCheckedType([...typeFilter]);
    }
  };

  return (
    <div className="hidden flex-col bg-white-color border-sidebar-border border-2 max-w-[360px] md:flex ">
      <Searchbar />
      {filters.map(({ title, options }) => (
        <div className="container flex-col w-full mt-14" key={title}>
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
      <div className="container flex-col w-full mt-14 mb-10">
        <div className="text-side-title font-medium font-jakarta pl-8 ">
          Price
        </div>
        <div className="App mt-8 px-8">
          <Slider price={checkedPrice} setPrice={setCheckedPrice} />
        </div>
        <div className="pl-8 mt-4 font-jakarta text-input-title font-semibold"> Max ${checkedPrice }</div>
      </div>
    </div>
  );
};
export default Sidebar;

