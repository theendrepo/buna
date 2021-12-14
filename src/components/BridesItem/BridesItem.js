import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BridesItem = ({ collections }) => {
    return (
        <div className="collection">
            {collections.map((item) => 
            <div className="collection__item">
                {/* <img src={filteredCollection.node.featuredImage.node.localFile.url} /> */}
                <GatsbyImage image={getImage(item.featuredImage.node.localFile)} 
                alt={item.title}/>
                <div className="collection__title">
                <h4 className="title-lg">{item.title}</h4>
                </div>
                <div className="collection__description">
                <p dangerouslySetInnerHTML={{__html:item.content}}></p>
                </div>
                <div className="collection__category" dangerouslySetInnerHTML={{__html:item.bridesStories.client}}></div>
             </div>)}
        </div>
    )
}

export default BridesItem
