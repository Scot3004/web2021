import React from "react"
import Layout from "./layout"
import SEO from "./seo"
import Header from "../components/Header/header"
import Footer from "../components/Footer/page-footer"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { useAvatar } from "../hooks/use-avatar"

const PageLayout = ({ location, children, metadata }) => {
  const avatar = useAvatar()
  const { title, social, author } = useSiteMetadata()

  const pageTitle = metadata?.title ? metadata.title : title
  const pageHeader = metadata?.header ? (
    metadata.header
  ) : (
    <Header>{pageTitle}</Header>
  )

  const footer = <Footer socialLinks={social} author={author} avatar={avatar} />

  return (
    <Layout location={location} header={pageHeader} footer={footer}>
      <SEO title={pageTitle} />
      {children}
    </Layout>
  )
}

export default PageLayout
