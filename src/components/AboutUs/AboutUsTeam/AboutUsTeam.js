import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const AboutUsTeam = ({team}) => {
    return (
        <section className="our-team-wrap container">
            <h2 className="gray-title">Our team</h2>
            <div className="our-team">
                {team.map((item)=>
                    <div className="person">
                        {/* <img className="person__img" src={item.image.localFile.url} alt="" /> */}
                  <GatsbyImage  image={getImage(item.image.localFile)} alt={item.name} />
                        <h3 className="person__name">{item.name}</h3>
                        <h4 className="person__position">{item.position}</h4>
                    </div>
                )}
            </div>
        </section>
    )
}

export default AboutUsTeam
