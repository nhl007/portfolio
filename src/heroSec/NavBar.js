export default function NavBar() {
    return(
        <div className='flex flex-row justify-between mx-10 '>
            <div className=' text-center p-5 text-3xl'><h1 className='brandName text-white'>ASIF NIHAL</h1></div>
            <div className='flex flex-row cursor-pointer p-5 text-base text-center font-semibold  text-white'>
                <a href="#home" className='mx-3'> HOME </a>
                <a href="#aboutMee" className='mx-3'> ABOUT ME</a>
                <a href="#Resume" className='mx-3'> RESUME </a>
                <a href="#testimonial" className='mx-3'> TESTIMONIAL</a>
                <a href="#hireMe" className='mx-3'> CONTACT ME</a>
            </div>
        </div>
    )
}