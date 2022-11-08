import { useState } from 'react';

const FloatingMenu = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setMenu(!menu);
        }}
        className=' h-[80px] sm:w-[60px] sm:h-[60px] w-[80px] rounded-[50%] cursor-pointer fixed right-2 sm:right-[20px] bottom-2 sm:bottom-[30px] z-[99]'
      >
        <img
          className='rounded-[9999px]'
          src='https://png.pngtree.com/template/20191018/ourmid/pngtree-letter-n-logo-graphic-elegant-and-unique-sliced-design-template-vector-image_320245.jpg'
          alt='contacts'
        />
      </div>
      <a href='mailto:apar.asif.an@gmail.com' target='blank'>
        <div
          className={`w-[60px] bottom-[100px] h-[60px] right-[20px] rounded-full p-2 elementToFadeInAndOut ${
            !menu ? ' hidden' : 'fixed'
          } `}
        >
          <img
            src='https://cdn-icons-png.flaticon.com/512/281/281769.png'
            alt='gmail'
          />
        </div>
      </a>
      <a href='https://github.com/nhl007' target='blank'>
        <div
          className={`w-[60px] bottom-[160px] h-[60px] right-[20px] rounded-full p-2 elementToFadeInAndOut ${
            !menu ? ' hidden' : 'fixed'
          } `}
        >
          <img
            src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
            alt='github'
          />
        </div>
      </a>
      <a
        href='https://www.linkedin.com/in/asif-nihal-23ba73227/'
        target='blank'
      >
        <div
          className={`w-[50px] bottom-[230px] h-[50px] right-[26px] rounded-full  elementToFadeInAndOut ${
            !menu ? ' hidden' : 'fixed'
          } `}
        >
          <img
            src='https://cdn-icons-png.flaticon.com/512/145/145807.png'
            alt='linkedIn'
          />
        </div>
      </a>
    </>
  );
};

export default FloatingMenu;
