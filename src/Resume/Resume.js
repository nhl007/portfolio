import { AcademicCapIcon,BriefcaseIcon,DesktopComputerIcon,PresentationChartLineIcon} from '@heroicons/react/solid'
import { useState } from 'react'
import Education from './History/Education'
import Work from './History/Work'
import Projects from './History/Projects'
import Programing from './History/Programming'

export default function Resume () {
    
    // States

    const[ education,setEducation]=useState(true)
    const[ work,setWork]=useState(false)
    const[ programing,setPrograming]=useState(false)
    const[ projects,setProjects]=useState(false)

    const setResumeState=(setFun,state1)=>{
        setAllFalse()
        setFun(state1)
    }
    function setAllFalse() {
        setEducation(false);
        setPrograming(false)
        setProjects(false)
        setWork(false)
    }
    

    return(
        <div id='Resume' className='flex flex-col resumeMainDiv' style={{marginInline:'auto'}}>
             <div className='flex flex-col text-center'>
                <span className=' font-extrabold text-6xl underline tracking-wider'> &emsp;Resume&emsp;</span>
                <span className='text-lg mt-2 font-semibold'> My formal Bio deatils :</span>
            </div>
            <div className='resume2nd w-9/12'>
                <div className='w-1/3 flex justify-start shadow-xl'> 
                <div className=' flex flex-col IconSpan justify-start'>
                    <AcademicCapIcon className='w-7 h-6 text-white resumeIcons'/>
                    <BriefcaseIcon className='w-7 h-6 text-white resumeIcons'/>
                    < DesktopComputerIcon className='w-7 h-6 text-white resumeIcons'/>
                    <PresentationChartLineIcon className='w-7 h-6 text-white resumeIcons'/>

                </div>
                <div className='flex flex-col'>
                    <span 
                        className={ education===false?'resumeItems' : 'resumeItems selected'} 
                    onClick={()=>setResumeState(setEducation,true)}>Education</span>
                    <span  className={ work===false?'resumeItems' : 'resumeItems selected'} 
                    onClick={()=>setResumeState(setWork,true)}>Work</span>
                    <span  className={ programing===false?'resumeItems' : 'resumeItems selected'} onClick={()=>setResumeState(setPrograming,true)}>Programing</span>
                    <span  className={ projects===false?'resumeItems' : 'resumeItems selected'} onClick={()=>setResumeState(setProjects,true)}>Projects</span>
                 </div>
                </div>



                <div className='w-2/3 flex align-middle'>
                 {education===true&&<Education/>}
                 {work===true&&<Work/>}
                 {programing===true&&<Programing/>}
                 {projects===true&&<Projects/>}
                </div>
                </div>
            
        </div>
    )
}