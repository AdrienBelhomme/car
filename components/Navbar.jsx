import { useTheme } from 'next-themes';
import Image from "next/image";


import images from '../assets';


const Navbar = () => {
  const { theme } = useTheme();

  console.log({ theme });

  return (
   <nav className="w-full flex justify-between items-center p-5 bg-white">
  
      <Image 
        src={images.logo} 
        alt="Logo" 
        width={148}
        height={44}
        layout="fill" 
      />

    <div className="flex flex-row gap-4 items-center">
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