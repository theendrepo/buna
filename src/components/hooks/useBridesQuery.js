import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
 
const useCollectionQuery = () => {
    const data = useStaticQuery(graphql`
    query{
      allWpBridesStories {
        nodes {
          title
          content
          bridesStories {
            client
          }
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
    `)
    return data;
}

export default useCollectionQuery
