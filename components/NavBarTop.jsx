import Profile from "components/Profile";
import VuesaxBoldSetting2 from "components/VuesaxBoldSetting2";
import Notification from "components/Notification";
import VuesaxBoldHeart from "components/VuesaxBoldHeart";

const NavBarTopProps  = (props) => {
  return (
    <div
      className="relative bg-white border-solid border w-[1440px] h-[124px] border-[rgba(195,212,233,0.4)] overflow-clip"
      style={props.style}
    >
      <div
        className="h-4 left-16 absolute w-[116px] top-[54px] bg-[rgba(160,181,255,1)] rounded-[20px]"
       />
      <div
        className="opacity-80 h-11 left-60 top-10 absolute bg-white border-solid border w-[492px] border-[rgba(195,212,233,1)] rounded-[70px]"
       />
      <div
        className="absolute w-[15px] h-[15px] left-[270px] top-[54px] bg-[rgba(160,181,255,1)] rounded-[20px]"
       />
      <div
        className="absolute w-[115.38px] h-[15px] left-[299px] top-[54px] bg-[rgba(239,243,253,1)] rounded-[20px]"
       />
      <div
        className="opacity-80 w-11 h-11 top-10 absolute bg-white border-solid border left-[1332px] border-[rgba(195,212,233,1)] rounded-[90px]"
       />
      <Profile />
      <div
        className="opacity-80 w-11 h-11 top-10 absolute bg-white border-solid border left-[1268px] border-[rgba(195,212,233,1)] rounded-[90px]"
       />
      <VuesaxBoldSetting2 />
      <div
        className="opacity-80 w-11 h-11 top-10 absolute bg-white border-solid border left-[1204px] border-[rgba(195,212,233,1)] rounded-[90px]"
       />
      <Notification />
      <div
        className="opacity-80 w-11 h-11 top-10 absolute bg-white border-solid border left-[1140px] border-[rgba(195,212,233,1)] rounded-[90px]"
       />
      <VuesaxBoldHeart />
    </div>
  );
}

NavBarTop.defaultProps = {
  style: {},
};

export default NavBarTopProps;

