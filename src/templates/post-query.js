import { graphql } from 'gatsby'
import PostPage from '../components/post'

export default PostPage

export const query = graphql`
  query PortfolioPageQuery(
    $id: String!,
    $previousId: String,
    $nextId: String
    ) {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    portfolioPost(id: { eq: $id }) {
      id
      excerpt
      body
      slug
      title
      tags
      keywords
      role
      responsibilities
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageAlt
      socialImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gallery {
        alt
        image {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
          thumbnail: childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    previous: portfolioPost(id: { eq: $previousId }) {
      id
      excerpt
      slug
      title
    }
    next: portfolioPost(id: { eq: $nextId }) {
      id
      excerpt
      slug
      title
    }
  }
`
