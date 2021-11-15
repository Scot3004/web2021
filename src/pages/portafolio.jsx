import React from "react"
import { graphql } from "gatsby"

import Layout from "../containers/layout"
import SEO from "../containers/seo"
import FooterContainer from "../containers/footer-container"
import Header from "../components/Header/header"
import PortfolioList from "../components/Portfolio/portfolio-list"

const PortfolioPosts = ({ data, location }) => (
  <Layout location={location} header={<Header>Portafolio</Header>} footer={ <FooterContainer />}>
    <SEO title="Portafolio" />
    <main>
      <PortfolioList posts={data.allMdx.edges} />
    </main>
  </Layout>
)

export const query = graphql`
  {
    allMdx(
      filter: { fields: { contentType: { eq: "portafolio" } } }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          slug
          excerpt
          frontmatter {
            title
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1.7)
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

export default PortfolioPosts
