import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h1>start here</h1>
        <StaticImage
          src="https://source.unsplash.com/random"
          alt="random picture"
        />
        <StaticImage
          src="https://source.unsplash.com/random/200"
          alt="random picture"
        />
      </div>
    </Layout>
  )
}

export default IndexPage
