import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import PageHeader from "../components/PageHeader/PageHeader"
import Layout from "../components/layout"
import Seo from "../components/seo"

import CollectionFilter from '../components/Collection/CollectionFilter'
import CollectionItem from "../components/Collection/CollectionItem"

import useCollectionQuery from "../components/hooks/useCollectionQuery"
import image1 from '../images/img1.jpg';

const Collection = () => {
  const collectionData = useCollectionQuery();
  // const collections = collectionData.allWpCollection.edges; 
  const [categoryFilter, setCategoryFilter] = useState('All') 
  let collections = [];

  if(collectionData.allWpCollection.edges){
      collections = collectionData.allWpCollection.edges;
  }
  if(collections.length <= 0){
      return (
          <Layout>
              <PageHeader title={"No content here"}/>
          </Layout>
      )   
  }
    
  function handleCategoryFilter(cat){
    setCategoryFilter(cat);
  }
  function filterCollection(collection){
    if(categoryFilter == 'All'){
      return collection;
    }
    return collection.node.collectionCategory.nodes.find( ({name}) => name == categoryFilter );
  }
  console.log("collectionData", collectionData);
  console.log("collectionState", typeof(categoryFilter) );
  return(
<Layout>
    <Seo title="Collection" />
    <section className="collection-wrap">
        <div className="container">
          <CollectionFilter 
          collectionCategories={collectionData.allWpCollectionCategory.nodes} 
          categoryFilter={categoryFilter} 
          handleCategoryFilter={handleCategoryFilter} />
          <CollectionItem 
            collections={collections}
            filterCollection={filterCollection} />
        </div>
      </section>
  </Layout>
  )
}

export default Collection
