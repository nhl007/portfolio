import SkillsGrid from './SkillsGrid';
import css3 from './icons/css-3.png';
import html5 from './icons/html.png';
import js from './icons/js.png';
import nodejs from './icons/nodejs.png';
import react from './icons/react.png';
import reactNative from './icons/react (1).png';
import mysql from './icons/mysql.png';
import postgres from './icons/postgre.png';
import monngodb from './icons/leaf.png';
import php from './icons/php.png';
import wordpress from './icons/wordpress.png';
import python from './icons/python.png';
import cpp from './icons/c-.png';

export default function AboutMe() {
  const firebase =
    'https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png';
  const graphQl =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png';
  return (
    <div id='aboutMee' className='my-[100px] sm:my-[24px] flex flex-col p-6 '>
      <div className='flex flex-col text-center'>
        <span className=' font-extrabold text-4xl sm:text-xl tracking-wider font-aulire'>
          Skills and Expertise
        </span>
        <span className='text-lg mt-2 sm:mt-1 font-semibold'>
          {' '}
          Why Choose Me?{' '}
        </span>
      </div>
      <div className=' h-[1px] w-[60%] self-center bg-black my-4'></div>
      <div className=' p-5 sm:p-2 flex flex-row justify-center shadow-xl '>
        <div className=' w-full grid grid-cols-5 sm:grid-cols-5 gap-4 sm:gap-2 place-items-center'>
          <SkillsGrid src={html5} name='Html5' />
          <SkillsGrid src={css3} name='Css3' />
          <SkillsGrid src={js} name='JavaScript' />
          <SkillsGrid src={nodejs} name='NodeJS' />
          <SkillsGrid src={graphQl} name='GraphQL' />
          <SkillsGrid src={react} name='React' />
          <SkillsGrid src={reactNative} name='React Native' />
          <SkillsGrid src={postgres} name='PostgresSQL' />
          <SkillsGrid src={mysql} name='MY Sql' />
          <SkillsGrid src={monngodb} name='MongoDB' />
          <SkillsGrid src={firebase} name='FireBase' />
          <SkillsGrid src={python} name='Python' />
          <SkillsGrid src={cpp} name='C++' />
          <SkillsGrid src={wordpress} name='WordPress' />
          <SkillsGrid src={php} name='PHP' />
        </div>
      </div>
    </div>
  );
}
