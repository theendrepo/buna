import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const useMenuQuery = () => {
    const data = useStaticQuery(graphql`
        query {
            wpMenu {
            menuItems {
                nodes {
                label
                id
                url
                }
            }
            }
        }
      `)
    return data
}

export default useMenuQuery
