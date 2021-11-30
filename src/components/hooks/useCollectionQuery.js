import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
 
const useCollectionQuery = () => {
    const data = useStaticQuery(graphql`
    query{
      wpPage(databaseId: {eq: 16}) {
        title
      }
        allWpCollectionCategory {
          nodes {
            name
          }
        }
        allWpCollection {
            edges {
              node {
                id
                title
                uri
                content
                collectionCategory {
                    nodes {
                      name
                    }
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
      }
    `)
    return data;
}

export default useCollectionQuery
