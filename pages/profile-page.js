import Image from 'next/image';
import image from '../assets/index';
import { Button } from '../components';

const Profile = ({ profileName = 'Web3', title = 'Agent' }) => (
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
          <div className="ml-[80px] md:text-xl font-bold ">
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
  </div>
);

export default Profile;
