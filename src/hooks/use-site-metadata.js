import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            social {
              name
              url
            }
            sidebar {
              title
              subtitle
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
