import React from "react"
import { graphql } from "gatsby"

import Layout from "../containers/layout"
import SEO from "../containers/seo"
import FooterContainer from "../containers/footer-container"
import Header from "../components/Header/header"
import PostList from "../components/Blog/blog-list"

const BlogPosts = ({ data, location }) => (
  <Layout location={location} header={<Header>Blog</Header>} footer={<FooterContainer />}>
    <SEO title="Blog" />
    <main>
      <PostList posts={data.allMdx.edges} />
    </main>
  </Layout>
)

export const query = graphql`
  {
    allMdx(
      filter: { fields: { contentType: { eq: "blog" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          slug
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
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
