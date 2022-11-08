import React from 'react';
import './App.css';
import NavBar from './heroSec/NavBar';
import ImgAndDes from './heroSec/ImgAndDes';
import AboutMe from './About Me/AboutMe';
import Resume from './Resume/Resume';
import Projects from './Testimonial/Projects';
import Contact from './Contact/Contact';
import FloatingMenu from './FloatingMenu';
function App() {
  return (
    <div id='home' className='primaryContainer scroll-smooth'>
      <header className='heroSection'>
        <NavBar />
        <ImgAndDes />
      </header>
      <AboutMe />
      <Resume />
      <Projects />
      <Contact />
      <FloatingMenu />
      {/* <footer className='footer flex justify-center items-end text-center mt-11 sm:mt-4 gap-5 sm:gap-2 p-3 sm:p-2'>
        <a
          href='tel:+8801686658461'
          className=' flex flex-col border-y-1 p-1 px-2 border-x-2 hover:bg-slate-100 hover:text-black cursor-pointer text-xs'
        >
          +88-016-86-658461
        </a>
        <a
          href='mailto:apar.asif.an@gmail.com'
          className=' border-y-1 p-1 px-2 border-x-2 hover:bg-slate-100 hover:text-black cursor-pointer text-xs'
        >
          apar.asif.an@gmail.com
        </a>
        <div className=' border-y-1 p-1 px-2 border-x-2 hover:bg-slate-100 hover:text-black cursor-pointer text-xs'>
          Nadda, Dhaka, Bangladesh
        </div>
      </footer> */}
    </div>
  );
}

export default App;
