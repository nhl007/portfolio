export default function Work() {
  return (
    <div className='flex flex-col text-black p-7 sm:p-2 gap-4 w-full '>
      <div className='flex flex-col mt-2 sm:mt-0 w-full justify-between '>
        <div className=' flex justify-between items-center'>
          <span className='text-xl sm:text-xs text-red-700  '>
            GGTPC Electronics LLC
          </span>
          <span className=' bg-yellow-400  rounded sm:rounded-sm p-1 sm:p-0 sm:px-1 text-lg sm:text-[9px] text-black  '>
            2022-present
          </span>
        </div>
        <span className='text-lg sm:text-xs mt-2 sm:mt-0'>
          Full Stack Web Developer
        </span>
        <span className='text-lg sm:text-xs mt-2 sm:mt-0'>
          <ol className=' list-disc px-7 sm:px-4 sm:text-[8px]'>
            <li>
              Built web applications using React, NodeJS (Express) and MySQL
              database.
            </li>
            <li>
              Used Popular JavaScript framework like React and CSS
              libraries(bootstrap, tailwind) to build websites.
            </li>
            <li>
              Used Docker for containerization and also experienced in AWS EC2
              and Linux based VPS servers.
            </li>
          </ol>
        </span>
      </div>
    </div>
  );
}
