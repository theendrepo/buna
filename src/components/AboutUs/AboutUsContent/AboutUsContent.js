import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import placeholderImg from '../../../images/dress-placeholder.jpg';

const AboutUsContent = ({subTitle, content, featuredImg}) => {
    return (
        <section className="about-wrap container">
            <div className="about">
                <div className="about__image">
                    {/* <img src={featuredImg} /> */}
                    {featuredImg &&
                        <GatsbyImage  image={getImage(featuredImg)} alt={subTitle} />
                    }
                </div>
                {subTitle &&
                    <div className="heading-section">
                        <h2 className="title-xl">{subTitle}</h2>
                    </div>
                }
                {content && 
                    <div className="about__content" dangerouslySetInnerHTML={{ __html:content}} >
                    </div>
                }
            </div>
        </section>
    )
}

export default AboutUsContent
