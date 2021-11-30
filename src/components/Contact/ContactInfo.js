import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import phoneSvg from '../../images/phone.png'

const ContactInfo = ({contactInfo}) => {
    return (
        <section className="contact-info-wrap container">
            <div className="contact-info">
                {contactInfo.map((item)=>
                    <div className="contact-info__item">
                        <div className="contact-info__icon">
                        <GatsbyImage image={getImage(item.icon.localFile)} alt={item.title}/>
                        </div>
                        <div className="contact-info__title title-lg">{item.title}</div>
                        <div className="contact-info__content">
                            <p dangerouslySetInnerHTML={{__html:item.content}}></p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default ContactInfo
