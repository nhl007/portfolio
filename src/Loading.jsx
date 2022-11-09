const Loading = () => {
  return (
    <div className=' z-[99999] flex justify-center align-middle items-center w-[100vw] h-[100vh] fixed'>
      <div className='spinner opacity-75'>
        {/* <div className='loader'></div> */}
        <lottie-player
          src='https://assets8.lottiefiles.com/packages/lf20_gSMVZV7ZdZ.json'
          background='transparent'
          speed='1'
          style={{ width: '100px', height: '100px' }}
          loop
          autoplay
        ></lottie-player>
        <p className=' font-aulire text-lg  text-emerald-300'>
          Loading... Please Wait...
        </p>
      </div>
    </div>
  );
};

export default Loading;
