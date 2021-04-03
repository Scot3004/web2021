/** @jsx jsx */
import { jsx } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"
import { css, Flex, Box, Link } from "theme-ui"

const Bio = ({author, avatar}) => {
  return (
    <Flex sx={{
      my: 2,
      alignItems: `center`,
      borderTop: theme => `1px solid ${theme.colors.muted}`,
      pt: 2
      }}>
      {avatar && (
        <GatsbyImage
          image={avatar?.childImageSharp.gatsbyImageData}
          alt={author.name}
          sx={{
            mr: 2,
            borderRadius: "50%",
          }}
        />
      )}
      <Box>
        <Link href="https://www.secorto.com/">{author.name}</Link>
        {` `}
        {author.job}
      </Box>
    </Flex>
  )
}

export default Bio
