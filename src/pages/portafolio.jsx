import React from 'react'
import { graphql } from "gatsby"

import Layout from '../containers/layout'
import SEO from '../containers/seo'
import Footer from '../components/ui/page-footer'
import Header from '../components/Header/header'
import PostList from '../components/Portfolio/portfolio-list'


const BlogPosts = ({ data, location }) => (
  <Layout location={location} header={<Header>Blog</Header>} >
    <SEO title="Blog" />
    <main>
      <PostList posts={data.allMdx.edges } />
    </main>
    <Footer socialLinks={data.site.siteMetadata.social} />
  </Layout>
)

export const query = graphql`
  {
    allMdx(filter: {fields: {contentType: {eq: "portafolio"}}},sort: {order: ASC, fields: [frontmatter___title]}) {
      edges {
        node {
          slug
          excerpt
          frontmatter {
            title
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        social {
          name
          url
        }
      }
    }
  }
`

export default BlogPosts

