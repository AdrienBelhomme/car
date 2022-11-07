import { useContext, useEffect, useState } from "react";
import {useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Link from 'next/link';


const Navbar = () => {
  const { theme, setTheme } = useTheme();

  console.log({ theme });

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
        <div className="w-11 h-11 relative">
      <div
        className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/f1f56cb57c6c5d88e94501a481b5f732536c2851.webp)_center_/_cover] inset-0 w-11 absolute rounded-[90px]"
       />
    </div>
    <div className="w-11 h-11 relative">
      <div
        className="[box-shadow:0px_0px_0px_1px_rgba(195,_212,_233,_0.4)_inset] [box-shadow-width:1px] inset-0 opacity-80 w-11 absolute rounded-[90px]"
       />
      <div
        className="absolute rounded-full w-[11px] left-[70.45%] right-[4.55%] top-[4.55%] bottom-[70.45%] bg-[rgba(255,68,35,1)]"
       />
    </div>
    
    </nav>
  );
};

export default Navbar;