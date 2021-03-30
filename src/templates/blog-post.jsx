import React from "react"
import { graphql } from "gatsby"

import Layout from '../containers/layout'
import SEO from '../containers/seo'
import BlogPost from '../components/Blog/blog-post'
import HeaderLink from '../components/Header/header-link'

const BlogLink = <HeaderLink to="/blog" >Blog</HeaderLink>

const BlogTemplate = ({ data: { mdx }, location }) => {
  return (
    <Layout location={location} header={BlogLink}>
      <SEO title={mdx.frontmatter.title} />
      <BlogPost
        title={mdx.frontmatter.title}
        body={mdx.body}
        date={mdx.frontmatter.date}
        image={mdx.frontmatter.image}
      />
      {/* <Footer socialLinks={ social }/> */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        image {
          childImageSharp{
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

export default BlogTemplate
