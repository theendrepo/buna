import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';

const useContactQuery = () => {
    const data = useStaticQuery(graphql`
    query{
        wpPage(databaseId: {eq: 19}) {
          title
          contact {
            contactInfo {
              content
              title
              icon {
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

export default useContactQuery
