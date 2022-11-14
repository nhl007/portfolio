import nodejs from '../../../src/About Me/icons/nodejs.png';
import react from '../../../src/About Me/icons/react.png';
import mysql from '../../../src/About Me/icons/mysql.png';

const SS = () => {
  return (
    <>
      <div className=' flex justify-center items-center p-10 sm:p-2 gap-20 sm:gap-6 sm:flex-col'>
        <div className='flex p-5 sm:p-2 shadow-lg '>
          <div className='flex-col w-[300px] h-[400px] sm:h-auto '>
            <div className=' flex justify-between'>
              <h1>SS Ultimate Solutions</h1>
              <a href='https://ssultimatecreditrepair.com' target='blank'>
                <img
                  src='https://static.vecteezy.com/system/resources/previews/003/731/316/original/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg'
                  alt='url'
                  width='30px'
                  height='30px'
                />
              </a>
            </div>
            <div
              className=' flex gap-4 mt-4
            '
            >
              <img src={react} width='30px' height='30px' alt='react' />
              <img src={nodejs} width='30px' height='30px' alt='react' />
              <img src={mysql} width='30px' height='30px' alt='react' />
            </div>
            <p className=' mt-4'>
              This is fully featured modern professional website. This has an
              client enrollment funnel, affiliate program, fully featured admin
              dashboard, sales program, analytics, payment integration
              (authorize.net) and many more . This is also a progressive web
              application with offline capabilities.
            </p>
          </div>
        </div>
        <div className='shadow-lg p-5 sm:p-2 styled-scrollbars'>
          <iframe
            title='ss'
            width='300px'
            height='400px'
            src='https://www.ssultimatecreditrepair.com/'
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default SS;
