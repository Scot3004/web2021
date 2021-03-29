/** @jsx jsx */
import { jsx, Card, Text } from 'theme-ui'
import { Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

export default ({ slug, image, title }) => (
  <Card
    as={Link}
    to={slug}
    sx={{
      flex: ['0 1 100%', '0 1 49%', '0 1 32%'],
    }}
  >
    <GatsbyImage image={image.childImageSharp.gatsbyImageData}
    sx={{
      borderTopRightRadius: 6,
      borderTopLeftRadius: 6,
      margin: 'auto'
    }}
    aspectRatio={16/9}
    height="220" />
    <Text
      sx={{
        color: 'primary',
        fontFamily: 'heading',
        textAlign: 'center',
        margin: 1,
        display: 'block'
      }}
    >
      {title}
    </Text>
  </Card>
)
