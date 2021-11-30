import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const CollectionItem = ({ filteredCollection, collections, filterCollection }) => {
    return (
        <div className="collection">
            {collections.filter(filterCollection).map(
              filteredCollection => (
                <div className="collection__item">
                  {/* <img src={filteredCollection.node.featuredImage.node.localFile.url} /> */}
                  <GatsbyImage image={getImage(filteredCollection.node.featuredImage.node.localFile)} 
                  alt={filteredCollection.node.title}/> 
                  <div className="collection__title">
                    <h4 className="title-lg">{filteredCollection.node.title}</h4>
                  </div>
                  <div className="collection__description">
                    <p dangerouslySetInnerHTML={{__html:filteredCollection.node.content}}></p>
                  </div>
                  <div className="collection__category">
                    {filteredCollection.node.collectionCategory.nodes &&
                    filteredCollection.node.collectionCategory.nodes.map((category, index) =>{
                      return index === 0 ? 
                      category.name : ' / ' + category.name
                    })}
                    </div>
                </div>
              )
            )}
        </div>
    )
}

export default CollectionItem
