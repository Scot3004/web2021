import React from "react"
import { graphql } from "gatsby"

import Layout from "../containers/layout"
import SEO from "../containers/seo"
import BlogPost from "../components/Blog/blog-post"
import HeaderLink from "../components/Header/header-link"
import PostNavigation from "../components/Post/post-navigation"

const BlogLink = <HeaderLink to="/blog">Blog</HeaderLink>

const BlogTemplate = ({ data: { mdx, previous, next }, location }) => {
  return (
    <Layout location={location} header={BlogLink}>
      <SEO title={mdx.frontmatter.title} />
      <BlogPost
        title={mdx.frontmatter.title}
        body={mdx.body}
        date={mdx.frontmatter.date}
        image={mdx.frontmatter.image}
      />
      <PostNavigation previous={previous} next={next} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String, $previous: String, $next: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    previous: mdx(id: { eq: $previous }) {
      id
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
    next: mdx(id: { eq: $next }) {
      id
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`

export default BlogTemplate
