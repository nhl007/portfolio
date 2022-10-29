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
    <div id='hireMe' className='flex flex-col w-[100%]'>
      <div className='flex flex-col text-center'>
        <span className=' font-extrabold text-6xl underline tracking-wider'>
          {' '}
          &emsp;Contact Me&emsp;
        </span>
        <span className='text-lg mt-2 font-semibold'>
          Let's keep in touch ...
        </span>
      </div>
      <div className='flex flex-row mx-20 my-11 contactSecond shadow-2xl '>
        <div className=' w-1/2 px-7 justify-center'>
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

        <form ref={form} onSubmit={sendEmail} className=' w-1/2 p-5 text-white'>
          <div className=' p-3 flex flex-col'>
            <label>Name:</label>
            <input
              className=' text-black p-2 mt-2 rounded'
              placeholder='Enter Your Name: '
              type='text'
              value={Name}
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
            />
          </div>
          <div className=' p-3 flex flex-col'>
            <label>Message:</label>
            <textarea
              placeholder='Enter Your Message :'
              className=' text-black p-2 mt-2 rounded h-10 max-h-14'
              value={Message}
              onChange={(e) => setMessage(e.target.value)}
              type='text'
            />
            <input
              type='submit'
              value='Send Email'
              className=' my-8 p-3 bg-green-600 cursor-pointer rounded '
            />
          </div>
        </form>
      </div>
    </div>
  );
}
