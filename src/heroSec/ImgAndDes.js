import React from 'react';
import Typed from 'typed.js';
import heroImg from './img.png';
export default function ImgAndDes() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: ['Quick Learner', 'Hard Worker', 'Passionate', 'Coffie Lover'],
      StartDElay: 0,
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 300,
      smartBackspace: true,
      loop: true,
      showCursor: false,
      autoInsertCss: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);
  return (
    <div className='pt-4 sm:pt-2 flex sm:flex-col mx-10 sm:mx-2'>
      <div className='w-1/2 sm:w-full p-6 sm:p-1 flex flex-col'>
        <div className='flex justify-center flex-col  HeroTextSec'>
          <span className='IamHeroText1'>
            Hello, I am{' '}
            <span className='tracking-[4px] sm:tracking-tight text-3xl sm:text-xl text-yellow-400 font-bold font-aulire'>
              Asif Nihal
            </span>
          </span>
          <span ref={el} className='IamHeroText2 text-3xl sm:text-lg h-8 p-2'>
            ''
          </span>
          <span className='IamHeroText3 text-2xl sm:text-lg p-4 sm:p-1'>
            Full-Stack Web Developper
          </span>
          <div className='flex flex-row mx-2 my-4 sm:my-1 p-4 sm:p-1 justify-center sm:gap-4'>
            <a href='#hireMe' className='HireMe mr-2 sm:mr-1 mt-2 sm:mt-1'>
              Hire Me
            </a>
            <a href='#Resume' className='GetResume mr-2 sm:mr-1 mt-2 sm:mt-1'>
              Get Resume
            </a>
            {/* <a href='#Resume' className='GetResume ml-2 mt-2'>
              Get Resume
            </a> */}
          </div>
        </div>
      </div>

      <div className='w-1/2 flex justify-center sm:hidden'>
        <div className='justify-center '>
          <img alt='HeroImage' src={heroImg} width='400px' height='400px' />
        </div>
      </div>
    </div>
  );
}
