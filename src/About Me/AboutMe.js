export default function AboutMe() {
  return (
    <div
      id='aboutMee'
      className='my-8 flex flex-col py-4'
      style={{ marginInline: 'auto', width: '80%' }}
    >
      <div className='flex flex-col text-center'>
        <span className=' font-extrabold text-6xl underline tracking-wider'>
          {' '}
          &emsp;About Me&emsp;
        </span>
        <span className='text-lg mt-2 font-semibold'> Why Choose Me? </span>
      </div>
      <div className=' m-5 flex flex-row justify-center shadow-xl'>
        <div className='w-1/2 flex justify-center align-middle'>
          <lottie-player
            src='https://assets5.lottiefiles.com/packages/lf20_l3sfdi9x.json'
            background='transparent'
            speed='1'
            style={{ width: '300px', height: '300px' }}
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className='w-1/2 flex flex-col justify-center align-middle text-xl font-semibold'>
          <span> Full Stack Web Developer</span>
          <span>
            Here Are Few Highlights:
            <span>
              <ul className=''>
                <li>&emsp; React </li>
                <li>&emsp; React Native </li>
                <li>&emsp; NodeJs</li>
                <li>&emsp; MongoDb </li>
                <li>&emsp; PostgresSQL/MySQL </li>
              </ul>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
