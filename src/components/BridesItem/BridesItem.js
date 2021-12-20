import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import bridePlaceholder from '../../images/dress-placeholder.jpg';
const BridesItem = ({ collections }) => {
    return (
        <div className="collection">
            {collections.map((item) => 
            <div className="collection__item">
                {item.featuredImage && 
                    <GatsbyImage image={getImage(item.featuredImage.node.localFile)} alt={item.title}/>
                }
                {!item.featuredImage && 
                    <img src={bridePlaceholder} />
                }
                <div className="collection__title">
                <h4 className="title-lg">{item.title}</h4>
                </div>
                {item.content && 
                    <div className="collection__description">
                    <p dangerouslySetInnerHTML={{__html:item.content}}></p>
                    </div>
                }
                {item.bridesStories.client && 
                    <div className="collection__category" dangerouslySetInnerHTML={{__html:item.bridesStories.client}}></div>
                }
             </div>)}
        </div>
    )
}

export default BridesItem
