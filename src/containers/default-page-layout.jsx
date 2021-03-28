import React from 'react'
import BlogLayout from './layout'
import SEO from './seo'
import Header from '../components/Header/header'
import Footer from '../components/ui/page-footer'
import { useSiteMetadata } from '../hooks/use-site-metadata'

export default ({ location, children, metadata }) => {
  const {title, social} = useSiteMetadata()

  const pageTitle = metadata?.title ? metadata.title:title
  const pageHeader = metadata?.header ? metadata.header:<Header>{ pageTitle }</Header>

  return (
    <BlogLayout location={location} header={pageHeader}>
      <SEO title={ pageTitle } />
      {children}
      <Footer socialLinks={ social }/>
    </BlogLayout>
  )
}
