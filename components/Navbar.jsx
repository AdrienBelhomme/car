import Image from 'next/image';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

import images from '../assets';

const Navbar = () => {
  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };
  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };

  const { data: session } = useSession();

  return (
    <nav className="w-full flex justify-between items-center  px-6 md:px-16 py-4 md:py-8 bg-white">
      <div className="flex flex-row gap-4 items-center justify-center">
        <div className="sm:flex hidden relative w-[148px] h-auto object-contain">
          <Link href="/car-rent">
            <Image
              src={images.Logo}
              alt="Logo"
              layout="fill"
            />
          </Link>
        </div>
        <div className="sm:hidden flex">
          <Image
            src={images.menu}
            alt="Menu"
            width={24}
            height={24}
            layout="fill"
          />
        </div>

        <div className="lg:flex hidden items-center">
          <div
            className="min-w-[492px] flex justify-between border rounded-full border-[#C3D4E9] gap-4 px-4 py-2"
          >
            <Image
              src={images.search}
              alt="search"
              width={19}
              height={19}
              layout="fill"
            />

            <input placeholder="Search something here" className=" flex-1 flex text-[14px] leading-[21px] text-[#3D5278] bg-transparent outline-none" />

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
        <div className="sm:flex hidden gap-4">
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
        {!session
              && (
              <img
                src="https://www.pngkey.com/png/detail/230-2301779_best-classified-apps-default-user-profile.png"
                alt="Profile"
                width={44}
                height={44}
              />
              ) }
        {session
              && (
                <img
                  src={session.user.image}
                  alt="Profile"
                  width={44}
                  height={44}
                />
              )}
      </div>
      {session && <button type="button" onClick={handleSignout} className="btn-signin">Sign out</button> }
      {!session && <button type="button" onClick={handleSignin} className="btn-signin">Sign in</button> }
    </nav>
  );
};

export default Navbar;
