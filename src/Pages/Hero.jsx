import React, { useRef, useState } from 'react';
import Shoes from '../assets/Shoes.png'
import { SecondaryButton } from '../Components/Buttons'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '../App.css'


function NikeLogo(props) {
  return (
    <div className="absolute opacity-10 font-poppins text-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold select-none">
      NIKE
      </div>
  )
}


const Hero = () => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 100 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s `;
  };

  return (
    <div>
    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
    pagination={{ clickable: true, }} modules={[Autoplay, Pagination]} onAutoplayTimeLeft={onAutoplayTimeLeft} className="mySwiper">
    <SwiperSlide>
    <div className='bg-background w-full md:h-[80vh] bg-center bg-cover md:overflow-y-hidden relative'>
    <NikeLogo />
          <div className="grid grid-cols-3 grid-rows-5 mx-auto my-auto max-w-7xl w-full h-full relative font-inter">
              <div className='z-10 col-span-1 row-start-2 justify-items-center self-center justify-self-center mt-24'>
                <div className='carousel-primary-text place-self-center'>NIKE</div>
                <p className='font-poppins first-letter:pl-3'>The Nike Dunk Low <span className='font-semibold'>Panda</span> is the perfect blend of classic style and modern performance. This iconic shoe features a classic silhouette with lightweight construction, providing maximum cushioning and support. The black and white colorway adds a timelessly stylish finish.</p>
              </div>
              <div className='col-span-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <img src={Shoes} className='w-[700px] custom-drop-shadow select-none' />
              </div>
              <div className='col-span-1 col-end-4 row-start-3 relative'>
                <div className='carousel-primary-text place-self-center'>DEALS</div>
              </div>
          <div></div>
          <div></div>
        </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress hidden" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  )
}

export default Hero