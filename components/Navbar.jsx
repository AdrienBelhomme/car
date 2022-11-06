import { useContext, useEffect, useState } from "react";
import {useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Link from 'next/link';


const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="relative bg-white border-solid border w-[1440px] h-[124px] border-[rgba(195,212,233,0.4)] overflow-clip">
    
    <div
        className="h-[44px] absolute top-[40px] left-[60px] w-[148px]"
      >
        <p
          className="h-4 font-family: Plus Jakarta Sans font-bold m-0 w-[148px] text-align: center text-[32px] tracking-[1px] leading-[1.2px] text-[rgba(53,99,233,1)]"
        >
          MORENT
        </p>
        </div>
        
    </nav>
  );
};

export default Navbar;