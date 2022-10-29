import React, { useState } from 'react';
import SS from './projectList/SS';
import Email from './projectList/Email';
import ECommerce from './projectList/ECommerce';

export default function Testimonials() {
  const [state, setState] = useState({
    prev: 0,
    now: 1,
    next: 2,
  });
  const projectArray = [<SS />, <Email />, <ECommerce />];
  const render = () => {
    return <>{projectArray[state.now]}</>;
  };

  return (
    <>
      <div
        id='testimonial'
        className=' my-20 flex flex-col justify-center items-center'
      >
        <div className='flex flex-col text-center'>
          <span className=' font-extrabold text-6xl underline tracking-wider'>
            &emsp;Projects&emsp;
          </span>
          <span className='text-lg mt-2 font-semibold'>
            Here are some of my Projects:
          </span>
        </div>
        <div className=' flex justify-center items-center'>
          <div
            onClick={() =>
              setState({
                prev: state.next,
                now: state.prev,
                next: state.now,
              })
            }
            className=' text-6xl p-5 shadow-lg hover:bg-slate-500 hover:transition-colors hover:text-white cursor-pointer'
          >
            {'<'}
          </div>
          {render()}
          <div
            onClick={() =>
              setState({
                prev: state.now,
                now: state.next,
                next: state.prev,
              })
            }
            className=' text-6xl p-5 shadow-lg hover:bg-slate-500 hover:transition-colors hover:text-white cursor-pointer'
          >
            {'>'}
          </div>
        </div>
      </div>
    </>
  );
}
