import React from 'react'
import Layout from './layout'
import SEO from './seo'
import Footer from '../components/ui/page-footer'
import HeaderLink from '../components/Header/header-link'
import { graphql } from "gatsby"

import { useSiteMetadata } from '../hooks/use-site-metadata'

const BlogLink = <HeaderLink to="/blog">Blog</HeaderLink>

const BlogLayout = ({ data, location, children, metadata }) => {
  const {title, social} = useSiteMetadata()

  const pageTitle = metadata?.title ? metadata.title:title

  return (
    <Layout location={location} header={BlogLink}>
      <SEO title={ pageTitle } />
      {data.title}
      {children}
      <Footer socialLinks={ social }/>
    </Layout>
  )
}

export default BlogLayout
