import React from "react";

export default function Testimonials(second) {
    return(
        <>
        <div id='testimonial' className=" my-20 flex flex-col justify-center">
        <div className='flex flex-col text-center'>
                <span className=' font-extrabold text-6xl underline tracking-wider'> &emsp;Testimonials&emsp;</span>
                <span className='text-lg mt-2 font-semibold'>What my clint say about me : </span>
            </div>
            <div className=" my-8 flex flex-row">
            <div className=" w-1/3 testimonial1 flex shadow-lg flex-col mx-4">
                <span> Demo Testimonials: ❌❌ 👉🏻 This guy is really aweaome. I am fully satisfied with him . </span>
                <span>Rating : 🌟🌟🌟🌟🌟</span>
                <span className='text-red-700 text-lg my-3'>Angie Jollie</span>
            </div>
            <div className="w-1/3 testimonial1 flex flex-col shadow-lg mx-4">
                <span>
                    Demo Testimonials: ❌❌ 👉🏻 What a helpful bunch. After being scammed by another web design company, I was recommended Nihal and I now know why. He is quick to respond, informative and deliver what is asked for. Would highly recommend.</span>
                <span>Rating : 🌟🌟🌟🌟🌟</span>
                <span className='text-red-700 text-lg my-4'>Lana Rochisky</span>
            </div>
            <div className=" w-1/3 testimonial1 flex shadow-lg flex-col mx-4">
                <span>
                Demo Testimonials:❌❌ 👉🏻 We partnered with Fluid Studios to design our website. We found them incredibly helpful and patient as we really didn't know what we wanted. Greg met with us on numerous occasions and we found the whole process a great experience. We ended up with a website we loved. I would definitely recommend Fluid Studios - you won't be disappointed.</span>
                <span>Rating : 🌟🌟🌟🌟🌟</span>
                <span className=" text-red-700 text-lg my-4"> Regina Felengi</span>
            </div>
        </div>
        </div>
        </>
    )
}