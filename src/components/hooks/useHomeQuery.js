import React from "react"
import { useStaticQuery, graphql } from "gatsby";


const useHomeQuery = () => {
    const data = useStaticQuery(graphql`
        query{
            wpPage(databaseId: {eq: 8}) {
            id
            footer {
                fieldGroupName
                footerEmail 
                footerSocials {
                    facebook
                    instagram
                    linkedin
                    twitter
                  }
            }
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
                heroSlider {
                    buttonLink
                    buttonTitle
                    description
                    imagePosition
                    imagePositionMobileX
                    imagePositionMobileY
                    title
                    image {
                      localFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                      }
                    }
                }
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
