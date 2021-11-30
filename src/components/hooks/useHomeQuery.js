import React from "react"
import { useStaticQuery, graphql } from "gatsby";


const useHomeQuery = () => {
    const data = useStaticQuery(graphql`
        query{
            wpPage(databaseId: {eq: 8}) {
            id
            
            projects {
                projects {
                  category
                  title
                  image {
                    localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                    }
                  }
                }
            }
            weAre {
                weAreDescription
                weAreTitle
                weAreImage {
                    localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                    }
                }
            }
            quote{
                quote
            }
            features {
                features {
                    title
                    description
                    fieldGroupName
                    icon {
                        localFile {
                            childImageSharp {
                              gatsbyImageData
                            }
                        }
                  }
                }
            }
            hero {
                fieldGroupName
                heroButtonLink
                heroButtonTitle
                heroDescription
                heroTitle
                heroImage {
                localFile {
                    childImageSharp {
                    gatsbyImageData
                    }
                }
                }
            }
            }
        }
    `);

    return data;
}

export default useHomeQuery
