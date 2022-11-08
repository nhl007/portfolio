import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

  //emailJs

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    var templateParams = {
      name: Name,
      form_name: Email,
      to_name: 'apar.asif.an@gmail.com',
      feedback: Message,
    };

    emailjs
      .send(
        'service_43xlgno',
        'template_ge5f1mo',
        templateParams,
        'MnrCaoVG7x3k-Sw2a'
      )
      .then(
        function (response) {
          console.log(
            'SUCCESSFULLY SEND EMAIL!',
            response.status,
            response.text
          );
        },
        function (error) {
          console.log('FAILED TO SEND EMAIL...', error);
        }
      );
  };

  return (
    <div
      id='hireMe'
      className='flex flex-col w-[100%] background__contact p-20 sm:p-10'
    >
      <div className='flex flex-col text-center'>
        <span className=' text-4xl sm:text-2xl font-aulire tracking-wider text-white'>
          &emsp;Contact Me&emsp;
        </span>
        <span className='text-lg mt-2 text-white'>Let's keep in touch ...</span>
      </div>
      <div className=' h-[1px] w-[60%] self-center bg-white my-4 sm:mb-0'></div>
      <div className='flex flex-row justify-center items-center my-11 sm:my-4 contactSecond shadow-2xl sm:shadow-lg w-[80%] sm:w-full '>
        <div className=' sm:hidden flex items-center w-1/2 px-7 justify-center'>
          <div className=' m-12 justify-center content-center'>
            <lottie-player
              src='https://assets5.lottiefiles.com/packages/lf20_bt7iqzns.json'
              background='transparent'
              speed='1'
              style={{ width: '300px', height: '300px' }}
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className=' w-1/2 sm:w-[100%] p-5 sm:p-1 text-white'
        >
          <div className=' p-3 flex flex-col'>
            <label>Name:</label>
            <input
              className=' text-black p-2 mt-2 rounded'
              placeholder='Enter Your Name: '
              type='text'
              value={Name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className=' p-3 flex flex-col'>
            <label>Email:</label>
            <input
              placeholder='Enter Your Email :'
              className=' text-black p-2 mt-2 rounded'
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              required
            />
          </div>
          <div className=' p-3 flex flex-col'>
            <label>Message:</label>
            <textarea
              cols={20}
              rows={3}
              required
              placeholder='Enter Your Message :'
              className=' text-black p-2 mt-2 rounded'
              value={Message}
              onChange={(e) => setMessage(e.target.value)}
              type='text'
            />
            <input
              type='submit'
              value='Send Email'
              className=' my-8 sm:mb-2 p-3 bg-green-600 cursor-pointer rounded '
            />
          </div>
        </form>
      </div>
    </div>
  );
}
