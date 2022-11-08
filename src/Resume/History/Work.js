export default function Work() {
  return (
    <div className='flex flex-col text-black p-7 sm:p-2 gap-4 '>
      <div className='flex flex-col mt-2 w-full justify-between '>
        <span className=' flex text-xl sm:text-xs text-red-700 sm:items-center '>
          GGTPC Electronics LLC
          <span className=' ml-auto bg-yellow-400  rounded text-center sm:rounded-sm p-1 sm:p-0 sm:px-1 text-lg sm:text-[9px] text-black sm:w-[100px] '>
            2022-present
          </span>
        </span>
        <span className='text-lg sm:text-xs mt-2'>
          Full Stack Web Developper
        </span>
        <span className='text-lg sm:text-xs mt-2'>
          <ol className=' list-disc px-7'>
            <li typeof='ol'>what I have done</li>
            <li>what I have done</li>
            <li>what I have done</li>
          </ol>
        </span>
      </div>
    </div>
  );
}
