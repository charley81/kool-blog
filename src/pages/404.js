import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <main>
        <h3>page not found</h3>
        <Link to="/">back home</Link>
      </main>
    </Layout>
  )
}

export default NotFoundPage
