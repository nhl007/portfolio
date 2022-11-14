export default function Education() {
  return (
    <div className='flex flex-col text-black p-7 sm:p-2 gap-4 w-full '>
      <div className='flex flex-col mt-2 w-full '>
        <div className=' flex justify-between'>
          <span className=' flex text-xl sm:text-xs text-red-700 sm:items-center '>
            United International University
          </span>
          <span className=' bg-yellow-400  rounded text-center sm:rounded-sm p-1 sm:p-0 sm:px-1 text-lg sm:text-[9px] text-black '>
            2019-present
          </span>
        </div>
        <span className='text-lg sm:text-xs mt-2'>
          Bachelors of Computer Science and Engeneering
        </span>
      </div>
      <div className='flex flex-col '>
        <div className='flex justify-between'>
          <span className=' flex text-xl sm:text-xs text-red-700 items-center'>
            Sirajganj Government Collage
          </span>
          <span className=' ml-auto bg-yellow-400 text-center  rounded sm:rounded-sm p-1 sm:p-0 sm:px-1 text-lg sm:text-[9px] text-black'>
            2016-2018
          </span>
        </div>
        <span className='text-lg sm:text-xs mt-2'>Intermidiate</span>
      </div>
    </div>
  );
}
