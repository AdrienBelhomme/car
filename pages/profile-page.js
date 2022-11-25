import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';

import image from '../assets/index';
import { Button } from '../components';
// import carData from '../public/dummyDatabase/CarData';

const Profile = ({ profileName = 'Web3', title = 'Agent' }) => {
  const [allCars, setAllCars] = useState([]);
  // const [rentedCars, setRentedCars] = useState([]);
  // const [carsForRent, setCarsForRent] = useState([]);
  console.log(allCars);
  const fetchCars = async () => {
    try {
      const response = await axios.get('/api/car', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.data;
      setAllCars(data.data);
    } catch (error) {
      if (error) {
        <h1>Sorry something went wrong</h1>;
      }
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className=" p-6 md:p-16 md:pt-[121px] ">
      <div className="text-xl font-bold mb-[29px] ">
        My Profile
      </div>
      <div className=" rounded-t-xl bg-white max-h-[300px]">
        <div>
          <Image src={image.carcover} alt="coverImage" className="w-full rounded-t-xl max-h-44 object-cover" />
        </div>
        <div className="flex flex-row justify-between mt-3 ">
          <div className="flex">
            <Image src={image.Profile} alt="profileImage" className="relative bottom-[80px] left-[31px] sm:flex hidden w-[148px] h-auto object-contain" />
          </div>
          <div className="flex flex-row justify-between gap-6 w-full pb-8  ">
            <div className="ml-[70px] md:text-xl font-bold ">
              {profileName}
              <div className="font-normal text-sm  text-secondinary-light-300 ">
                {title}
              </div>
            </div>
            <div className=" pr-[50px]">
              <Button text="Edit Profile" handleClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
      {/* <CarTypeList carData={carData} carCategory="Rented Cars" />
      <CarTypeList carData={carData} carCategory="Cars for Rent" /> */}
      <div className="flex justify-center mt-[55px]">
        <Link href="/add-car-form">
          <Button text="Add More Cars for Rent" />
        </Link>
      </div>
    </div>
  );
};

export default Profile;
