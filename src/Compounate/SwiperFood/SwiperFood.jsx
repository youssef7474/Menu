import React, { useRef } from 'react';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import chif1 from "../../assets/chif1.jpg"
import chif2 from "../../assets/chif2.jpg"
import chif3 from "../../assets/chif3.jpg"
import chif4 from "../../assets/chif4.jpg"
import chif5 from "../../assets/chif5.jpg"

const SwiperFood = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };



  return (
    <div className='container m-auto py-10 '>
      
    <h1 className='text-white text-center text-2xl hover:text-white cursor-default py-14' style={{color:"black"}}>All schedule and details will be available soon...  </h1>
    <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
        
      >
        <SwiperSlide style={{display:'flex',alignItems:"center",justifyContent:"center"}}    >
            <img src={chif1} alt='p' style={{width:"300px"}} ></img>
        </SwiperSlide>

        <SwiperSlide style={{display:'flex',alignItems:"center",justifyContent:"center"}} >
            <img src={chif2} alt='p' style={{width:"300px"}}></img>
        </SwiperSlide>

        <SwiperSlide style={{display:'flex',alignItems:"center",justifyContent:"center"}} >
            <img src={chif3} alt='p' style={{width:"300px"}}></img>
        </SwiperSlide>

        <SwiperSlide style={{display:'flex',alignItems:"center",justifyContent:"center"}} >
            <img src={chif4} alt='p' style={{width:"300px"}}></img>
        </SwiperSlide>


        <SwiperSlide style={{display:'flex',alignItems:"center",justifyContent:"center"}} >
            <img src={chif5} alt='p' style={{width:"300px"}}></img>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle} style={{display:"none"}}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent} style={{display:"none"}}></span>
        </div>


      </Swiper>



    </div>
  );
}

export default SwiperFood;
