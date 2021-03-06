import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import useHomeQuery from "../hooks/useHomeQuery"

import {Navigation, Pagination, A11y} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../css/secondary.css';

const Features = () => {
    const homeData = useHomeQuery();
    let featuresData = [];

    if(homeData.wpPage.features) featuresData = homeData.wpPage.features.features;
    console.log("featuresLength", featuresData.length);
    if(!featuresData.length) return <></>;
    
    return (
      <section className="features-wrap">
          { featuresData &&
            <div className="features container">
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                breakpoints={{
                  300: {
                    slidesPerView: 1
                  },
                  767: {
                    slidesPerView: 1
                  },
                  768: {
                    slidesPerView: 2
                  }
                }}
                spaceBetween={50}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}>
                {featuresData.map((feature) => 
                  <SwiperSlide>
                    <div className="feature">
                      <div className="feature__logo">
                        {/* <img src={feature.icon.localFile.url} /> */}
                        <GatsbyImage  image={getImage(feature.icon.localFile)} alt={feature.title} />
                      </div>
                      <div className="feature__content">
                        <h4 className="feature__title title-lg">{feature.title}</h4>
                        <p className="feature__description">{feature.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          }
          
      </section>
    )
}

export default Features
