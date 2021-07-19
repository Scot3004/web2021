import React from "react"
import { graphql } from "gatsby"

import Layout from "../containers/layout"
import SEO from "../containers/seo"
import BlogPost from "../components/Blog/blog-post"
import HeaderLink from "../components/Header/header-link"
import PostNavigation from "../components/Post/post-navigation"
import Bio from "../components/Bio/bio"
import { MDXRenderer } from "gatsby-plugin-mdx"

const BlogLink = <HeaderLink to="/blog">Blog</HeaderLink>

const BlogTemplate = ({
  data: { mdx, previous, next, site, avatar },
  location,
}) => {
  return (
    <Layout location={location} header={BlogLink}>
      <SEO title={mdx.frontmatter.title} />
      <BlogPost
        title={mdx.frontmatter.title}
        date={mdx.frontmatter.date}
        image={mdx.frontmatter.image}
      >
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </BlogPost>
      <Bio author={site.siteMetadata.author} avatar={avatar} />
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
    site {
      siteMetadata {
        author {
          name
          job
        }
      }
    }
    avatar: file(absolutePath: { regex: "/avatar.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        gatsbyImageData(width: 48, height: 48)
      }
    }
  }
`

export default BlogTemplate
