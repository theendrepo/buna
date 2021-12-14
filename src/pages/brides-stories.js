import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import PageHeader from "../components/PageHeader/PageHeader"
import Layout from "../components/layout"
import Seo from "../components/seo"

import CollectionFilter from '../components/Collection/CollectionFilter'
import BridesItem from "../components/BridesItem/BridesItem"

import useBridesQuery from "../components/hooks/useBridesQuery"
import image1 from '../images/img1.jpg';

const BridesStories = () => {
  const collectionData = useBridesQuery();
  console.log("briides", collectionData);

  // const bride = collectionData.allWpBridesStories.edges; 
  const [categoryFilter, setCategoryFilter] = useState('All') 
  let brides = [];

  if(collectionData.allWpBridesStories.nodes){
      brides = collectionData.allWpBridesStories.nodes;
  }
  if(brides.length <= 0){
      return (
          <Layout>
              <PageHeader title={"No content here"}/>
          </Layout>
      )   
  }
  
  return(
    <Layout>
      <Seo title="Collection" />
      <section className="brides-stories-page collection-wrap">
          <div className="container">
            <BridesItem 
              collections={brides} />
          </div>
          
        </section>
    </Layout>
  )
}
export default BridesStories
