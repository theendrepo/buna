import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const useAboutQuery = () => {
    const data = useStaticQuery(graphql`
    query{
        wpPage(databaseId: {eq: 13}) {
            title
            content
            featuredImage {
                node {
                    localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                    }
                }
            }
            about {
                aboutUsSubtitle
                ourTeam {
                    name
                    position
                    image {
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
    `);

    return data;
}

export default useAboutQuery
