import {
  AcademicCapIcon,
  BriefcaseIcon,
  DesktopComputerIcon,
  // PresentationChartLineIcon,
} from '@heroicons/react/solid';
import { useState } from 'react';
import Education from './History/Education';
import Work from './History/Work';
import Projects from './History/Projects';
import Programing from './History/Programming';

export default function Resume() {
  // States

  const [education, setEducation] = useState(true);
  const [work, setWork] = useState(false);
  const [programing, setPrograming] = useState(false);
  const [projects, setProjects] = useState(false);

  const setResumeState = (setFun, state1) => {
    setAllFalse();
    setFun(state1);
  };
  function setAllFalse() {
    setEducation(false);
    setPrograming(false);
    setProjects(false);
    setWork(false);
  }

  return (
    <div
      id='Resume'
      className='flex flex-col resumeMainDiv'
      style={{ marginInline: 'auto' }}
    >
      <div className='flex flex-col text-center'>
        <span className=' text-4xl sm:text-2xl  tracking-wider font-aulire'>
          {' '}
          &emsp;Resume&emsp;
        </span>
        <span className='text-lg mt-2 sm:mt-1'> My formal Bio deatils</span>
      </div>
      <div className=' h-[1px] w-[60%] self-center bg-white my-4 sm:my-4 '></div>

      <div className='resume2nd w-[60%] shadow-lg  sm:py-1 sm:shadow-sm'>
        <div className='w-1/3 sm:w-full flex sm:flex-col justify-start sm:justify-center shadow-xl'>
          <div className=' flex flex-col sm:flex-row IconSpan justify-start sm:hidden'>
            <AcademicCapIcon className='w-7 h-6 text-white resumeIcons' />
            <BriefcaseIcon className='w-7 h-6 text-white resumeIcons' />
            <DesktopComputerIcon className='w-7 h-6 text-white resumeIcons' />
            {/* <PresentationChartLineIcon className='w-7 h-6 text-white resumeIcons' /> */}
          </div>
          <div className='flex flex-col sm:justify-center  sm:flex-row sm:text-xs sm:gap-2 text-center'>
            <div
              className={`${
                education ? 'resumeItems selected' : 'resumeItems'
              } w-full `}
              onClick={() => setResumeState(setEducation, true)}
            >
              Education
            </div>
            <span
              className={
                work === false ? 'resumeItems' : 'resumeItems selected'
              }
              onClick={() => setResumeState(setWork, true)}
            >
              Work
            </span>
            <span
              className={
                programing === false ? 'resumeItems' : 'resumeItems selected'
              }
              onClick={() => setResumeState(setPrograming, true)}
            >
              Programing
            </span>
            {/* <span
              className={
                projects === false ? 'resumeItems' : 'resumeItems selected'
              }
              onClick={() => setResumeState(setProjects, true)}
            >
              Projects
            </span> */}
          </div>
        </div>

        <div className='w-full flex'>
          {education === true && <Education />}
          {work === true && <Work />}
          {programing === true && <Programing />}
          {projects === true && <Projects />}
        </div>
      </div>
    </div>
  );
}
