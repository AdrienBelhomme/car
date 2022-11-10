import React from 'react';
import Image from "next/image";
import images from '../assets';

const footerLinks = [
  {
    title: "About Links",
    sublinks: [
      {
        name: "How it works",
        link: "/how-it-works"
      },
      {
        name:  "Featured",
        link: "/featured" 
      },
      {
        name: "Partnership", 
        link: "/partnership"
      },
      {
        name: "Buisness Relation",
        link: "/buisness-relation"
      }
    ]
  },
  {
    title: "Social",
    sublinks: [
      {
        name: "Discord", 
        link: "/discord"
      },
      {
        name: "Instagram", 
        link: "/instagram"
      },
      {
        name: "Twitter", 
        link: "/twitter"
      },
      {
        name: "Facebook",
        link: "/facebook"
      }
    ]
  },
  {
    title: "Community",
    sublinks: [
      {
        name: "Events", 
        link: "/events"
      },
      {
        name: "Blogs", 
        link: "/blog"
      },
      {
        name: "Podcast", 
        link: "/podcast"
      },
      {
        name: "Invite a friend",
        link: "/invite a friend"
      }
    ]
  }
]

const Footer = () => {
  return (
    <footer className="w-full flex flex-col p-5 sm:gap-8 gap-4 bg-white">
          {/* links */}
      <div className="flex justify-between flex-wrap gap-4">
          <div>
      <Image 
        src={images.logo} 
        alt="Logo" 
        width={148}
        height={44} 
        layout="fill" 
      /><br></br>
        {/* Logo here */}
        {/* text below logo */}
        <h1 className="max w-35 font-jakarta font-medium text-[16px] leading-[32px] text-[#90A3BF]">Our vision is to provide convenience <br /> and help increase your sales business.</h1>
</div>
      <div className="flex flex-row flex-wrap gap-8">
        {footerLinks.map((links) => (
          <div className='flex flex-col gap-4'>
          {/* About links */}
          <h1 className="font-jakarta font-semibold text-[20px] leading-[24px] text-[#131313]">{links.title}</h1>
          <div className="flex flex-col gap-4 font-jakarta font-medium text-[16px] leading-[19.2px] text-[#90A3BF]">
            {links.sublinks.map((sublink) => (
              <a href={sublink.link} className='cursor-pointer'>{sublink.name}</a>
            ))}
          </div>
        </div>
        ))}

{/* Social links */}
        {/* <div className='flex flex-col gap-4'>

<h1 className="font-jakarta font-semibold text-[20px] leading-[24px] text-[#131313]">Social</h1>
<div className="flex flex-col gap-4 font-jakarta font-medium text-[16px] leading-[19.2px] text-[#90A3BF]">
  <a className='cursor-pointer'>Discord</a>
  <a className='cursor-pointer'>Instagram</a>
  <a className='cursor-pointer'>Twitter</a>
  <a className='cursor-pointer'>Facebook</a>
  
  </div>
  </div> */}
        
          {/* Community links */}
        {/* <div className='flex flex-col gap-4'>
          <h1 className="font-jakarta font-semibold text-[20px] leading-[24px] text-[#131313]">Community</h1>
          <div className="flex flex-col gap-4 font-jakarta font-medium text-[16px] leading-[19.2px] text-[#90A3BF]">
            <a className='cursor-pointer'>Events</a>
            <a className='cursor-pointer'>Blogs</a>
            <a className='cursor-pointer'>Podcast</a>
            <a className='cursor-pointer'>Invite a friend</a>
        </div>
        </div> */}

       
      </div>
      </div>

      {/* hr tag */}
       <hr class="my-8 h-px bg-gray-200 border-1 dark:bg-gray-700"></hr>

         {/* copyright */}
      <div className="flex justify-end gap-4">
        <div className="w-full flex justify-between flex-wrap">
          <p className="font-jakarta font-semibold text-[16px] leading-[32px] text-[#131313]">©2022 MORENT. All rights reserved</p>
          
          <div className="flex flex-row flex-wrap  md:gap-8 gap-4">
            <p
            className="font-semibold leading-[32px] text-[16px] md:text-[#131313] text-red-700">Privacy & Policy</p>
            <p
            className="font-semibold leading-[32px] text-[16px] text-[#131313]">Terms & Condition</p>
          </div>
        </div> 
      </div>
   
    </footer>
  )
}

       // <h2 className="font-jakarta font-semibold w-[292px] h-[64px] text-[16px] leading-[32px] text-[#131313]">©2022 MORENT. All rights reserved</h2>

// const Footer = (props) => {
//   return (
//     <div
//       className={`relative bg-white w-[1440px] h-[480px] overflow-clip font-['Plus_Jakarta_Sans']`}
//       style={props.style}
//     >
//       <p
//         className="absolute text-base font-semibold leading-loose text-left inline m-0 w-[292px] left-[60px] top-[388px] tracking-[-0.16px] text-[rgba(19,19,19,1)]"
//       >
//         ©2022 MORENT. All rights reserved
//       </p>
//       <p
//         className="w-36 absolute text-base font-semibold leading-loose text-right inline m-0 left-[1236px] top-[388px] tracking-[-0.16px] text-[rgba(19,19,19,1)]"
//       >
//         Terms & Condition
//       </p>
//       <p
//         className="w-36 absolute text-base font-semibold leading-loose text-right inline m-0 left-[1032px] top-[388px] tracking-[-0.16px] text-[rgba(19,19,19,1)]"
//       >
//         Privacy & Policy
//       </p>
//       <p
//         className="h-36 absolute text-base font-medium text-left inline m-0 w-[152px] left-[1228px] top-[136px] leading-[1.2px] text-[rgba(19,19,19,0.6)]"
//       >
//         Discord
//         <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         Instagram
//         <br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         Twitter
//         <br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         Facebook
//       </p>
//       <p
//         className="h-8 top-20 absolute text-xl font-semibold text-left inline m-0 w-[152px] left-[1228px] leading-[1.2px] text-[rgba(19,19,19,1)]"
//       >
//         Socials
//       </p>
//       <p
//         className="h-36 absolute text-base font-medium text-left inline m-0 w-[152px] left-[1016px] top-[136px] leading-[1.2px] text-[rgba(19,19,19,0.6)]"
//       >
//         Events
//         <br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         Blog
//         <br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         Podcast
//         <br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         Invite a friend
//       </p>
//       <p
//         className="h-8 top-20 absolute text-xl font-semibold text-left inline m-0 w-[152px] left-[1016px] leading-[1.2px] text-[rgba(19,19,19,1)]"
//       >
//         Community
//       </p>
//       <p
//         className="h-36 absolute text-base font-medium text-left inline m-0 w-[152px] left-[804px] top-[136px] leading-[1.2px] text-[rgba(19,19,19,0.6)]"
//       >
//         How it works
//         <br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         Featured
//         <br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         Partnership
//         <br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         Bussiness Relation
//       </p>
//       <p
//         className="h-8 top-20 absolute text-xl font-semibold text-left inline m-0 w-[152px] left-[804px] leading-[1.2px] text-[rgba(19,19,19,1)]"
//       >
//         About
//       </p>
//       <div
//         className="[rotate:-180deg] origin-top-left h-0 absolute w-[1320px] left-[1380px] top-[340px] outline outline-1 outline-[rgba(19,19,19,0.16)]"
//        />
//       <div
//         className="absolute top-20 gap-4 inline-flex flex-col items-start text-left left-[60px]"
//       >
//         <p
//           className="h-11 font-bold m-0 w-[148px] text-[32px] tracking-[1px] leading-[1.2px] text-[rgba(53,99,233,1)]"
//         >
//           MORENT
//         </p>
//         <p
//           className="text-base font-medium leading-loose m-0 w-[292px] tracking-[-0.16px] text-[rgba(19,19,19,0.6)]"
//         >
//           Our vision is to provide convenience and help increase your sales business.
//         </p>
//       </div>
//     </div>
//   );
// }

export default Footer;
