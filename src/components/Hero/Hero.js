import * as React from "react"
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import useHomeQuery from "../hooks/useHomeQuery"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, Mousewheel, Direction } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/mousewheel"
import '../../css/secondary.css'


const Hero = () => {
    let heroData = useHomeQuery();
    let heroSlider = heroData.wpPage.hero.heroSlider;
    console.log("heroData", heroSlider);

    
    let hero = [];
    if(heroData.wpPage.hero){
        hero = heroData.wpPage.hero;
    }
    if(hero.length <= 0) return <></>;

    const heroImg = getImage(hero.heroImage.localFile);
    // console.log("heroitem", getImage(heroSlider[0].image.localFile));
    
    return (
        <section className="hero-slider">
            <Swiper modules={[Mousewheel, Pagination]} 
                slidesPerView={1} 
                mousewheel={true} 
                direction={'vertical'} 
                pagination={{ "clickable": true }} >
                
                {heroSlider.map((hero)=>{
                    let heroImg= getImage(hero.image.localFile);
                    let heroImagePosition = hero.imagePosition;
                    let heroImagePositionMobileX = hero.imagePositionMobileX;
                    let heroImagePositionMobileY = hero.imagePositionMobileY;
                    return(
                    <SwiperSlide className={"hero" + " hero-"+heroImagePosition + " hero-horz-"+heroImagePositionMobileX + " hero-vert-"+heroImagePositionMobileY } 
                    style={{ backgroundImage: "url(" + heroImg.images.fallback.src + ")", }}>
                        <div className="container">
                            { hero.title &&
                            <div className="hero__title">
                                <h1>{hero.title}</h1>
                            </div> }
                            { hero.description &&
                            <div className="hero__desc">
                                <p>{hero.description}</p>
                            </div> }
                            { hero.buttonTitle &&
                            <div className="hero__button">
                                <Link to={hero.buttonLink} className="button button--pink">{hero.buttonTitle}</Link>
                            </div> }
                        </div>
                    </SwiperSlide>)
                })}
            </Swiper>
        </section>
    )
}

export default Hero