/* eslint-disable import/no-cycle */
import { Slider, Searchbar } from './index';

const Sidebar = ({ checkedCapacity, checkedType, setCheckedCapacity, setCheckedType }) => {
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
    const valueTarget = e.target.value;
    const goodValue = valueTarget.length === 1 ? +valueTarget : valueTarget;
    if (e.target.checked) {
      console.log(goodValue);
      console.log(typeof goodValue);
      if (typeof goodValue === 'number') { setCheckedCapacity([...capacityFilter, goodValue]); } else { setCheckedType([...typeFilter, goodValue]); }
    } else {
      if (typeof goodValue === 'number') capacityFilter.splice(checkedCapacity.indexOf(goodValue), 1);
      else { typeFilter.splice(checkedType.indexOf(goodValue), 1); }
      if (typeof goodValue === 'number') setCheckedCapacity([...capacityFilter]);
      else { setCheckedType([...typeFilter]); }
    }
  };

  // filtering test

  /* const isEven = (value) => value % 2 === 0;
  const isOdd = (value) => !isEven(value);

  const even = input.filter(isEven);
  const odd = input.filter(isOdd);

  const isChecked = (option) => checked.includes(option); */

  // const filterCar = allCarType.filter((option) => option.length > 5);

  // const testFilter = allCarType.some((car) => car === checked.indexOf(car));

  /* const findSport = allCarType.find((element) => element === checked[element]);

  const findSportFilter = allCarType.filter((element) => element === checked[element]);
 */

  return (
    <div className="hidden flex-col bg-white-color border-sidebar-border border-2 max-h-[1400px] max-w-[360px] md:flex ">
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
          <Slider />
        </div>
        <div className="pl-8 mt-4 font-jakarta text-input-title font-semibold"> Max $100.00</div>
      </div>
    </div>
  );
};
export default Sidebar;

