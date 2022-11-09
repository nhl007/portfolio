import React, { useState } from 'react';
import SS from './projectList/SS';
import Email from './projectList/Email';
import ECommerce from './projectList/ECommerce';

export default function Projects() {
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
        id='projects'
        className=' my-20 sm:my-6 flex flex-col justify-center items-center'
      >
        <div className='flex flex-col text-center'>
          <span className=' font-extrabold text-4xl sm:text-2xl tracking-wider font-aulire'>
            &emsp;Projects&emsp;
          </span>
          <span className='text-lg mt-2 font-semibold'>
            Here are some of my Projects
          </span>
        </div>
        <div className=' h-[1px] w-[60%] sm:w-[80%] self-center bg-black my-6 sm:my-4'></div>
        <div className=' flex justify-center items-center'>
          <div
            onClick={() =>
              setState({
                prev: state.next,
                now: state.prev,
                next: state.now,
              })
            }
            className=' sm:hidden  text-6xl sm:text-xl p-5 sm:p4 shadow-lg hover:bg-slate-500 hover:transition-colors hover:text-white cursor-pointer'
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
            className=' sm:hidden text-6xl sm:xl p-5 sm:p-4 shadow-lg hover:bg-slate-500 hover:transition-colors hover:text-white cursor-pointer'
          >
            {'>'}
          </div>
        </div>
        <button
          onClick={() =>
            setState({
              prev: state.now,
              now: state.next,
              next: state.prev,
            })
          }
          className=' lg:hidden xl:hidden py-2 px-4 bg-ss_primary mt-4'
        >
          Next -{'>'}
        </button>
      </div>
    </>
  );
}
