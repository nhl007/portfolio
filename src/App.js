import React from 'react';
import './App.css';
import NavBar from './heroSec/NavBar';
import ImgAndDes from './heroSec/ImgAndDes';
import AboutMe from './About Me/AboutMe';
import Resume from './Resume/Resume';
import Testimonials from './Testimonial/Testimonials';
import Contact from './Contact/Contact';
function App() {
  return(
    <div id='home' className='primaryContainer'>
      <div className='heroSection'>
        <NavBar/>
        <ImgAndDes/>
      </div>  
      <AboutMe/>
      <Resume />
      <Testimonials/>
      <Contact/>
      <div className='footer text-center mt-11'>
        <p className=' p-5'> Thank You For Visiting... </p>
      </div>
  </div>
  );
}

export default App;
