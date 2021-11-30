import React from 'react'
import { Link } from 'gatsby'
import useHomeQuery from '../hooks/useHomeQuery'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const About = () => {
    const homeData = useHomeQuery();
    let weAre = [];

    if(homeData.wpPage.weAre){
      weAre = homeData.wpPage.weAre;
    }
    if(!weAre) return <></>;
    
    // const weAreImage = weAre.weAreImage.localFile.url;

    return (
        <section class="about-us-wrap">
          { weAre && 
            <div class="container">
              <div class="about-us">
                <div class="about-us__image">
                  {/* <GatsbyImage image={weAreImage} alt="we are"/> */}
                  {/* <img src={weAreImage} /> */}
                  <GatsbyImage  image={getImage(weAre.weAreImage.localFile)} alt={weAre.weAreTitle} />
                </div>
                <div class="about-us__content">
                  <div class="about-us__title">
                    <h4 class="title-xl">{weAre.weAreTitle}</h4>
                  </div>
                  <div class="about-us__desc">
                    <p>{weAre.weAreDescription}</p>
                  </div>
                  <Link to="/about" class="button button--pink">About us </Link>
                </div>
              </div>
            </div>
          }
        </section>
    )
}

export default About
