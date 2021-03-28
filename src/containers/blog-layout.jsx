import React from 'react'
import Layout from './layout'
import SEO from './seo'
import Footer from '../components/ui/page-footer'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const BlogLayout = ({ location, children, metadata }) => {
  const {title, social} = useSiteMetadata()

  const pageTitle = metadata?.title ? metadata.title:title

  return (
    <Layout location={location} header="Blog">
      <SEO title={ pageTitle } />
      {children}
      <Footer socialLinks={ social }/>
    </Layout>
  )
}

export default BlogLayout
