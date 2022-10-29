export default function NavBar() {
  return (
    <div className='flex flex-row justify-between mx-10 '>
      <div className=' text-center p-5 text-3xl'>
        <h1 className=' tracking-[10px] text-white font-aulire'>ASIF NIHAL</h1>
      </div>
      <div className='flex flex-row items-center cursor-pointer p-5 text-base text-center font-semibold  text-white'>
        <a href='#home' className='mx-3'>
          Home
        </a>
        <a href='#aboutMee' className='mx-3'>
          About Me
        </a>
        <a href='#Resume' className='mx-3'>
          Resume
        </a>
        <a href='#testimonial' className='mx-3'>
          Projects
        </a>
        <a href='#hireMe' className='mx-3'>
          Contact Me
        </a>
      </div>
    </div>
  );
}
