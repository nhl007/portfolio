import { useState } from 'react';
import menuLogo from './menu.png';
import menuClose from './close.png';
export default function NavBar() {
  const [menu, setMenu] = useState(false);
  return (
    <div className='flex flex-row justify-between mx-10 sm:mx-3 '>
      <div className=' text-center p-5 sm:p-0 text-3xl sm:mt-3 sm:text-xl'>
        <h1 className=' tracking-[10px] sm:tracking-[1px] text-white font-aulire'>
          ASIF NIHAL
        </h1>
      </div>
      <div className=' lg:hidden xl:hidden fixed top-4 right-4'>
        <div
          className=''
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <img
            src={menu ? menuClose : menuLogo}
            width='20px'
            height='20px'
            alt='menu'
          ></img>
        </div>
      </div>
      <div
        className={`${
          menu || 'hidden'
        } sm:fixed sm:top-[60px] sm:right-4 flex flex-col justify-center items-center gap-2 xl:hidden lg:hidden  2xl:hidden w-[150px] h-[200px] bg-ss_primary text-[18px]  text-ss_white2 z-[2000] rounded-md elementToFadeInAndOut`}
      >
        <a href='#home'>Home</a>
        <a href='#aboutMee'>About Me</a>
        <a href='#Resume'>Resume</a>
        <a href='#projects'>Projects</a>
        <a href='#hireMe'>Contact Me</a>
      </div>

      <div className='sm:hidden flex flex-row items-center cursor-pointer p-5 text-base text-center font-semibold  text-white'>
        <a href='#home' className='mx-3'>
          Home
        </a>
        <a href='#aboutMee' className='mx-3'>
          About Me
        </a>
        <a href='#Resume' className='mx-3'>
          Resume
        </a>
        <a href='#projects' className='mx-3'>
          Projects
        </a>
        <a href='#hireMe' className='mx-3'>
          Contact Me
        </a>
      </div>
    </div>
  );
}
