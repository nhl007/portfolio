import nodejs from '../../../src/About Me/icons/nodejs.png';
import react from '../../../src/About Me/icons/react.png';

const Email = () => {
  return (
    <>
      <div className=' flex justify-center items-center p-10 sm:p-4  sm:flex-col max-w-[1000px] sm:max-w-[600px] '>
        <div className='flex p-10 sm:p-2 shadow-lg  '>
          <div className='flex flex-col h-[400px] sm:h-auto gap-6 '>
            <div className='flex flex-row justify-between min-w-[700px] sm:min-w-[300px]'>
              <h1 className=' text-xl font-aulire text-ss_black'>
                Email Blast
              </h1>
              <a
                target='blank'
                className=' cursor-pointer'
                href='https://github.com/nhl007/email_blast'
              >
                <svg
                  height='32'
                  aria-hidden='true'
                  viewBox='0 0 16 16'
                  version='1.1'
                  width='32'
                  data-view-component='true'
                  class='octicon octicon-mark-github v-align-middle'
                >
                  <path
                    fill-rule='evenodd'
                    d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'
                  ></path>
                </svg>
              </a>
            </div>
            <div className=' flex gap-4'>
              <img src={react} width='30px' height='30px' alt='react' />
              <img src={nodejs} width='30px' height='30px' alt='react' />
            </div>
            <h2>Description:</h2>
            <p className=' text-justify sm: text-sm'>
              This tool can be used to send thousands of mail at once . This
              tool takes an csv file and sends out emails under the column named
              as ['Recommended Contact Email']. This can also be used to create
              custom email template and also it has the ability to filter out
              text within braces like this : {'{{{ text }}}'}. The api will
              filter the text with ['Recommended Contact First Name'] +
              ['Recommended Contact Last Name'] column value within csv file.
              You can of course extend this feature as you like with regular
              expressions. This tool can be extended to save the custom email
              templates also . Right now it is using gmail api but it can easily
              be replaced by smtp transport.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
