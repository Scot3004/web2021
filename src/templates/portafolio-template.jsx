import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import PortfolioPost from "../components/Portfolio/portfolio-post"
import SEO from "../containers/seo"
import Layout from "../containers/layout"
import HeaderLink from "../components/Header/header-link"

const PortfolioLink = <HeaderLink to="/portafolio" >Portafolio</HeaderLink>

const PortfolioTemplate = ({ data: { mdx }, location }) => {
  return (
    <Layout location={location} header={PortfolioLink}>
      <SEO title={mdx.frontmatter.title} />
      <PortfolioPost
        title={mdx.frontmatter.title}
        role={mdx.frontmatter.role}
        responsibilities={mdx.frontmatter.responsibilities}
        image={mdx.frontmatter.image}
        gallery={mdx.frontmatter.gallery}

      >
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </PortfolioPost>
      {/* <Footer socialLinks={ social }/> */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query PortafolioPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        role
        responsibilities
        image {
          childImageSharp{
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        gallery {
          image {
            publicURL
            thumbnail: childImageSharp{
              gatsbyImageData(width: 200)
            }
          }
        }
      }
    }
  }
`

export default PortfolioTemplate
