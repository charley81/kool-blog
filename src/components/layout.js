import React from 'react'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import globalStyles from '../styles/global-styles'
import Navbar from './navbar'
import { useStaticQuery, graphql } from 'gatsby'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `)

  return (
    <div>
      <Global styles={globalStyles} />
      <h3>{data.site.siteMetadata.title}</h3>
      <p>{data.site.siteMetadata.description}</p>
      <Navbar />
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

export default Layout
