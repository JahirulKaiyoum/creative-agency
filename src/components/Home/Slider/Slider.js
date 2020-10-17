import React from "react";
import "swiper/swiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from "swiper";

import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import sliderOne from "../../../images/sliderOne.png";
import sliderTwo from "../../../images/sliderTwo.png";
import sliderThree from "../../../images/sliderThree.png";
import sliderFour from "../../../images/sliderFour.png";
import sliderFive from "../../../images/sliderFive.png";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay]);
const Slider = () => {
  const sliderContent = [
    {
      id: 1,
      img: sliderOne,
    },
    {
      id: 2,
      img: sliderTwo,
    },
    {
      id: 3,
      img: sliderFour,
    },
    {
      id: 4,
      img: sliderFive,
    },
  ];

  return (
    <section style={{paddingTop:'50px', paddingBottom:'100px' , backgroundColor:'#111430'}}>
      <div className="container">
        <div className="row">
                  <div className="col-md-8 offset-md-2" style={{ paddingBottom:'60px'}}>
                  <h1 className="text-center text-white">Here are some sample of our <span style={{color: '#7AB259'}}> works</span> </h1>
                  </div>
        </div>
        <div className="row">
          
            <Swiper
              spaceBetween={20}
              autoplay= {{ delay: 2000, }}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {sliderContent.map((slider) => (
                <SwiperSlide key={slider.id}>
                  <div>
                    <img src={slider.img} alt="" className="img-fluid" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
     
    </section>
  );
};

export default Slider;

// <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         ...
