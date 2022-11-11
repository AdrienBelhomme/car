import { useState } from 'react';
import { useTheme } from 'next-themes';
import Image from "next/image";


import images from '../assets';


const Navbar = () => {
  const { theme } = useTheme();

  console.log({ theme });

  return (
    <nav className="w-full flex justify-between items-center p-5 bg-white">
      <div className="flex flex-row gap-4 items-center justify-center">
        <div className='sm:flex hidden relative w-[148px] h-auto object-contain'>
          <Image
            src={images.logo}
            alt="Logo"
            layout="fill"
          />
        </div>
        <div className='sm:hidden flex'>
          <Image
            src={images.menu}
            alt="Menu"
            width={24}
            height={24}
            layout="fill"
          />
        </div>

        <div className='lg:flex hidden items-center'>
          <div
            className="min-w-[492px] flex justify-between border rounded-full border-[#C3D4E9] gap-4 px-4 py-2">
            <Image
              src={images.search}
              alt="search"
              width={19}
              height={19}
              layout="fill"
            />

            <input placeholder='Search something here' className=" flex-1 flex text-[14px] leading-[21px] text-[#3D5278] bg-transparent outline-none" />

            <Image
              src={images.filter}
              alt="filter"
              width={24}
              height={24}
              layout="fill"
            />

          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-row justify-end gap-4 items-center">
        <div className='sm:flex hidden gap-4'>
          <Image
            src={images.Like}
            alt="Like"
            width={44}
            height={44}
            layout="fill"
          />
          <Image
            src={images.Notification}
            alt="Notification"
            width={44}
            height={44}
            layout="fill"
          />
          <Image
            src={images.Setting}
            alt="Setting"
            width={44}
            height={44}
            layout="fill"
          />
        </div>
        <Image
          src={images.Profile}
          alt="Profile"
          width={44}
          height={44}
          layout="fill"
        />
      </div>

    </nav>
  );
};

export default Navbar;