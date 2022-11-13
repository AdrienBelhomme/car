import { useRouter } from 'next/router';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faGasPump, faGear, faUser, faStar } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Image from 'next/image';

import Link from 'next/link';
import { Button, CarBanner, CarCard, CarTypeList, Sidebar } from '../../components';
import images from '../../assets';
import carList from '../../constants/carList';
import { useThemeContext } from '../../context/filtersState';
import { popularNew, recommendedCars } from '../../public/dummyDatabase/CarData';

const Stars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i += 1) {
    if (i <= rating) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-star h-4" />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-dark-900 dark:text-white h-4" />);
    }
  }
  return <div className="flex">{stars}</div>;
};

const details = () => {
  const [filterState, setFilterState] = useThemeContext();

  const [banner, setBanner] = useState(images.banner.src);
  const [selected, setSelected] = useState('');

  console.log(filterState);

  const router = useRouter();
  const { cid } = router.query;

  console.log(cid);

  const { carImages, model, type, gas, category, people, price } = router.query;

  const numberOfCars = 10;

  const filters = ['Sport', 'SUV', 'MPV', 'Sedan', 'Hackback', 'Coupe'];
  const capacity = [1, 2, 4, 8];
  const id = 0;

  const handleBanner = (e) => {
    setBanner(e);
  };

  const handleSelected = (i) => {
    setSelected(i);
  };

  const carImagess = [
    images.carCurrent, images.detailsViewCar, images.detailsViewCar2,
  ];

  const filteredData = () => {
    const filterData = carList.filter(({ name, type, people, price }) => {
      if (filterState.checkedType.length === 0 && filterState.checkedCapacity.length === 0) {
        return filters.some((c) => c === type) && capacity.some((l) => l === people && price < filterState.checkedPrice);
      } if (filterState.checkedCapacity.length === 0) {
        return filterState.checkedType.some((c) => c === type) && capacity.some((l) => l === people) && price < filterState.checkedPrice;
      } if (filterState.checkedType.length === 0) {
        return filters.some((c) => c === type) && filterState.checkedCapacity.some((l) => l === people) && price < filterState.checkedPrice;
      }
      return filterState.checkedType.some((c) => c === type) && filterState.checkedCapacity.some((l) => l === people) && price < filterState.checkedPrice;
    });

    return filterData;
  };

  const navigate = () => {
    console.log('navigate');
    router.push('/category');
  };

  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="p-4 w-full">

        <div className="flex items-baseline justify-between">

          <div className="flex flex-col items-center w-49% rounded-lg" style={{ padding: '0 1.25rem 1.25rem 0' }}>

            <div style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }} className="md:flex w-full bg-cover rounded">
              <CarBanner
                title={carList[id].text}
                subtitle={carList[id].subtitle}
                carImg={images.nissan}
                card="transparent"
                btnColor="bg-[#5CAFFC]"
                hidden="hidden"
              />
            </div>
            <div className="w-full mt-5">
              <div className="flex items-center justify-between">
                {carImagess.map((image, i) => (
                  <Image
                    key={i}
                    onClick={(event) => {
                      handleBanner(event.target.src);
                      handleSelected(i);
                    }}
                    src={image}
                    alt={`${image}`}
                    className={`${selected === i ? 'selected p-2' : ''} w-31% object-contain`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className=" w-49% bg-white rounded-lg p-5">

            <div className="flex items-center justify-between">

              <div className="text-3xl font-bold font-jakarta text-center text-input-title">{model}</div>
              <div className="heart cursor-pointer" onClick={() => {}}>
                <FontAwesomeIcon
                  icon={faHeart}
                  className={`h-5 ${carImages ? 'text-error-default' : 'text-dark-900 dark:text-white'} 2xl:h-5`}
                />
              </div>
            </div>

            <div className="flex items-center mt-3">

              <div className="self-center cursor-pointer">
                <Stars rating={4} />
              </div>
              <div className="text-sm ml-4 font-jakarta text-center text-input-title">440+ reviewers</div>
            </div>

            <div className="flex items-center mt-8">
              <p className="text-xl font-jakarta text-input-title leading-9">{carList[id].description}
              </p>
            </div>

            <div className="flex items-center mt-8 flex-wrap gap-y-3">
              <div className="flex items-center justify-between w-full">
                <div className="flex w-full">
                  <p className="tracking-tight text-xl leading-6 text-secondinary-light-300">TypeCar:</p>
                  <p className="tracking-tight text-xl font-bold leading-6 text-input-title ml-3">{type}</p>
                </div>
                <div className="flex w-full">
                  <p className="tracking-tight text-xl leading-6 text-secondinary-light-300">Capacity:</p>
                  <p className="tracking-tight text-xl font-bold leading-6 text-input-title ml-3">{people}</p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex w-full">
                  <p className="tracking-tight text-xl leading-6 text-secondinary-light-300">Steering:</p>
                  <p className="tracking-tight text-xl font-bold leading-6 text-input-title ml-3">{category}</p>
                </div>
                <div className="flex w-full">
                  <p className="tracking-tight text-xl leading-6 text-secondinary-light-300">Gasoline:</p>
                  <p className="tracking-tight text-xl font-bold leading-6 text-input-title ml-3">{gas}</p>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-between mt-10">
              <div className="flex text-base font-jakarta font-bold items-end">
                <p className="text-3xl font-bold">${price} /</p>
                <p className="text-secondinary-light-300 ml-1 font-jakarta">day</p>
              </div>
              <div>
                <Button bgColor="bg-btn-blue" text="Rent Now" className="lg:w-full" />
              </div>
            </div>

          </div>

        </div>

        <div className="flex mt-4 justify-start flex-wrap gap-4">
          <CarTypeList numberOfCars={5} carData={recommendedCars} noscroll="flex-wrap" />

        </div>

        <div className="flex justify-between mt-8 md:mt-[42px]">
          <h3 className="flex text-secondinary-light-300 font-medium text-sm md:text-base md:font-semi-bold">
            All cars
          </h3>
          <button type="button" onClick={() => {}}>
            <h3 className="flex justify-end text-btn-blue text-xs font-semibold md:text-base">
              <Link href="/category">view all</Link>
            </h3>
          </button>
        </div>

        <div className="flex mt-[30px] justify-start flex-wrap gap-4">

          { filteredData().slice(0, numberOfCars).map((model, index) => (
            <div key={index} className="w-full md:max-w-49 lg:max-w-32 xl:max-w-25 3xl:max-w-20 md:flex-48 lg:flex-31 xl:flex-23 3xl:flex-19">
              <CarCard model={model.name} image={model.image} people={model.people} type={model.type} price={model.price} checkedCapacity={filterState.checkedCapacity} checkedType={filterState.checkedType} checkedPrice={filterState.checkedPrice} />
            </div>
          ))}
          {filteredData().length === 0 ? <p className="text-5xl p-12 m-auto">no cars matching your criterias</p> : null}
        </div>

      </div>

    </div>
  );
};

export default details;
