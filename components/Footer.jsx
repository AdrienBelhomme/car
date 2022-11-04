import React from 'react';

const Footer = (props) => {
  return (
    <div
      className={`relative bg-white w-[1440px] h-[480px] overflow-clip font-['Plus_Jakarta_Sans']`}
      style={props.style}
    >
      <p
        className="absolute text-base font-semibold leading-loose text-left inline m-0 w-[292px] left-[60px] top-[388px] tracking-[-0.16px] text-[rgba(19,19,19,1)]"
      >
        ©2022 MORENT. All rights reserved
      </p>
      <p
        className="w-36 absolute text-base font-semibold leading-loose text-right inline m-0 left-[1236px] top-[388px] tracking-[-0.16px] text-[rgba(19,19,19,1)]"
      >
        Terms & Condition
      </p>
      <p
        className="w-36 absolute text-base font-semibold leading-loose text-right inline m-0 left-[1032px] top-[388px] tracking-[-0.16px] text-[rgba(19,19,19,1)]"
      >
        Privacy & Policy
      </p>
      <p
        className="h-36 absolute text-base font-medium text-left inline m-0 w-[152px] left-[1228px] top-[136px] leading-[1.2px] text-[rgba(19,19,19,0.6)]"
      >
        Discord
        <br />
        <br />
        Instagram
        <br />
        <br />
        Twitter
        <br />
        <br />
        Facebook
      </p>
      <p
        className="h-8 top-20 absolute text-xl font-semibold text-left inline m-0 w-[152px] left-[1228px] leading-[1.2px] text-[rgba(19,19,19,1)]"
      >
        Socials
      </p>
      <p
        className="h-36 absolute text-base font-medium text-left inline m-0 w-[152px] left-[1016px] top-[136px] leading-[1.2px] text-[rgba(19,19,19,0.6)]"
      >
        Events
        <br />
        <br />
        Blog
        <br />
        <br />
        Podcast
        <br />
        <br />
        Invite a friend
      </p>
      <p
        className="h-8 top-20 absolute text-xl font-semibold text-left inline m-0 w-[152px] left-[1016px] leading-[1.2px] text-[rgba(19,19,19,1)]"
      >
        Community
      </p>
      <p
        className="h-36 absolute text-base font-medium text-left inline m-0 w-[152px] left-[804px] top-[136px] leading-[1.2px] text-[rgba(19,19,19,0.6)]"
      >
        How it works
        <br />
        <br />
        Featured
        <br />
        <br />
        Partnership
        <br />
        <br />
        Bussiness Relation
      </p>
      <p
        className="h-8 top-20 absolute text-xl font-semibold text-left inline m-0 w-[152px] left-[804px] leading-[1.2px] text-[rgba(19,19,19,1)]"
      >
        About
      </p>
      <div
        className="[rotate:-180deg] origin-top-left h-0 absolute w-[1320px] left-[1380px] top-[340px] outline outline-1 outline-[rgba(19,19,19,0.16)]"
       />
      <div
        className="absolute top-20 gap-4 inline-flex flex-col items-start text-left left-[60px]"
      >
        <p
          className="h-11 font-bold m-0 w-[148px] text-[32px] tracking-[1px] leading-[1.2px] text-[rgba(53,99,233,1)]"
        >
          MORENT
        </p>
        <p
          className="text-base font-medium leading-loose m-0 w-[292px] tracking-[-0.16px] text-[rgba(19,19,19,0.6)]"
        >
          Our vision is to provide convenience and help increase your sales business.
        </p>
      </div>
    </div>
  );
}

export default Footer;
