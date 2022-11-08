const SkillsGrid = ({ src, name }) => {
  return (
    <>
      <div className='flex justify-center items-center flex-col p-4 sm:p2 gap-2'>
        <img
          src={src}
          alt={name}
          className=' w-[60px] h-[60px] sm:w-[20px] sm:h-[20px] '
        />
        <span className=' text-lg sm:text-xs'>{name}</span>
      </div>
    </>
  );
};

export default SkillsGrid;
