import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import useHomeQuery from "../hooks/useHomeQuery"

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
            {featuresData.map((feature) => 
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
            )}
            </div>
          }
          
      </section>
    )
}

export default Features
