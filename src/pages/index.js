import * as React from "react"
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page" >
      <p>I'am making this by following the gatsby tutorial</p>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
