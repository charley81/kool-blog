import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const blogPage = ({ data }) => {
  return (
    <Layout>
      {data.allFile.nodes.map(node => {
        return <p>{node.name}</p>
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: { dir: { regex: "/blog$/" } }) {
      nodes {
        name
      }
    }
  }
`

export default blogPage
