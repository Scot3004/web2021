/** @jsx jsx */
import { jsx } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"
import { Flex, Box, Link } from "theme-ui"

const Bio = ({ author, avatar }) => {
  return (
    <Flex
      sx={{
        my: 2,
        alignItems: `center`,
        borderTop: theme => `1px solid ${theme.colors.muted}`,
        pt: 2,
      }}
    >
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
      <Box
        sx={{
          textAlign: 'center',
          margin: "auto"
        }}>
        <p sx={{
          fontFamily: "title",
          fontSize: "1.5rem",
          m: 0
        }}><Link sx={{
          textDecoration: 'none'
        }} href="https://www.secorto.com/">{author.name}</Link></p>
        <p sx={{
          m:0,
          fontSize: "0.8rem"
        }}>{author.job}</p>
      </Box>
    </Flex>
  )
}

export default Bio
