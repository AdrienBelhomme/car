import { useState } from 'react';

const Sidebar = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    console.log(checked);
    setChecked(!checked);
  };
  return (

    <div className="flex flex-col bg-sidebar-bg border-sidebar-border border-2 h-1400 w-360 ">
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
      <div className="text-side-title font-jakarta pl-8 pt-10">
        Type
      </div>
      <div className="flex items-center my-8">
        <input id="default-checkbox" type="checkbox" value={checked} onChange={handleChange} className="ml-9 w-4 h-4 text-blue-600 bg-white rounded-md border-gray-300 focus:ring-checkbox-checked dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-semibold font-jakarta text-input-title dark:text-gray-300">Sport <span className="text-input-number font-medium font-jakarta">(10)</span></label>
      </div>
      <div className="flex items-center my-8">
        <input id="default-checkbox" type="checkbox" value={checked} onChange={handleChange} className="ml-9 w-4 h-4 text-blue-600 bg-white rounded-md border-gray-300 focus:ring-checkbox-checked dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-semibold font-jakarta text-input-title dark:text-gray-300">SUV <span className="text-input-number font-medium font-jakarta">(12)</span></label>
      </div>
      <div className="flex items-center my-8">
        <input id="default-checkbox" type="checkbox" value={checked} onChange={handleChange} className="ml-9 w-4 h-4 text-blue-600 bg-white rounded-md border-gray-300 focus:ring-checkbox-checked dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-semibold font-jakarta text-input-title dark:text-gray-300">MVP <span className="text-input-number font-medium font-jakarta">(16)</span></label>
      </div>
      <div className="flex items-center my-8">
        <input id="default-checkbox" type="checkbox" value={checked} onChange={handleChange} className="ml-9 w-4 h-4 text-blue-600 bg-white rounded-md border-gray-300 focus:ring-checkbox-checked dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-semibold font-jakarta text-input-title dark:text-gray-300">Sedan <span className="text-input-number font-medium font-jakarta">(20)</span></label>
      </div>
      <div className="flex items-center my-8">
        <input id="default-checkbox" type="checkbox" value={checked} onChange={handleChange} className="ml-9 w-4 h-4 text-blue-600 bg-white rounded-md border-gray-300 focus:ring-checkbox-checked dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-semibold font-jakarta text-input-title dark:text-gray-300">Coupe <span className="text-input-number font-medium font-jakarta">(14)</span></label>
      </div>
      <div className="flex items-center my-8">
        <input id="default-checkbox" type="checkbox" value={checked} onChange={handleChange} className="ml-9 w-4 h-4 text-blue-600 bg-white rounded-md border-gray-300 focus:ring-checkbox-checked dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-semibold font-jakarta text-input-title dark:text-gray-300">Hackback <span className="text-input-number font-medium font-jakarta">(14)</span></label>
      </div>

      <div className="text-side-title font-jakarta pl-8 pt-10">
        Capacity
      </div>
      <div className="flex items-center my-8">
        <input id="default-checkbox" type="checkbox" value={checked} onChange={handleChange} className="ml-9 w-4 h-4 text-blue-600 bg-white rounded-md border-gray-300 focus:ring-checkbox-checked dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-semibold font-jakarta text-input-title dark:text-gray-300">2 Person <span className="text-input-number font-medium font-jakarta">(10)</span></label>
      </div>
      <div className="flex items-center my-8">
        <input id="default-checkbox" type="checkbox" value={checked} onChange={handleChange} className="ml-9 w-4 h-4 text-blue-600 bg-white rounded-md border-gray-300 focus:ring-checkbox-checked dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-semibold font-jakarta text-input-title dark:text-gray-300">4 Person <span className="text-input-number font-medium font-jakarta">(10)</span></label>
      </div>
      <div className="flex items-center my-8">
        <input id="default-checkbox" type="checkbox" value={checked} onChange={handleChange} className="ml-9 w-4 h-4 text-blue-600 bg-white rounded-md border-gray-300 focus:ring-checkbox-checked dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-semibold font-jakarta text-input-title dark:text-gray-300">6 Person <span className="text-input-number font-medium font-jakarta">(14)</span></label>
      </div>
      <div className="flex items-center my-8">
        <input id="default-checkbox" type="checkbox" value={checked} onChange={handleChange} className="ml-9 w-4 h-4 text-blue-600 bg-white rounded-md border-gray-300 focus:ring-checkbox-checked dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-semibold font-jakarta text-input-title dark:text-gray-300">Sport <span className="text-input-number font-medium font-jakarta">(12)</span></label>
      </div>
      <div className="flex items-center my-8">
        <input id="default-checkbox" type="checkbox" value={checked} onChange={handleChange} className="ml-9 w-4 h-4 text-blue-600 bg-white rounded-md border-gray-300 focus:ring-checkbox-checked dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-semibold font-jakarta text-input-title dark:text-gray-300">8 or More <span className="text-input-number font-medium font-jakarta">(16)</span></label>
      </div>
      <div className="text-side-title font-medium font-jakarta pl-8 pt-10">
        Price
      </div>
    </div>
  );
};
export default Sidebar;
