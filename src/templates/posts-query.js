import { graphql } from 'gatsby'
import PostsPage from '../components/posts'

export default PostsPage

export const query = graphql`
  query PortfolioQuery {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    allPortfolioPost(sort: { fields: [title], order: DESC }, limit: 1000) {
      edges {
        node {
          id
          excerpt
          slug
          title
          tags
          role
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
        }
      }
    }
  }
`
