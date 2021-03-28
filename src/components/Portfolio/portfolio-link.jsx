/** @jsx jsx */
import { jsx, Card, Text } from 'theme-ui'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

export default ({ slug, image, title }) => (
  <Card
    as={Link}
    to={slug}
    sx={{
      flex: ['0 1 100%', '0 1 49%', '0 1 32%'],
    }}
  >
    <Img
      sizes={{ ...image.childImageSharp.fluid, aspectRatio: 16 / 9 }}
      sx={{
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        margin: 'auto'
      }}
      width="391"
      height="220"
    />
    <Text
      sx={{
        color: 'primary',
        fontFamily: 'heading',
        textAlign: 'center',
        margin: 1,
      }}
    >
      {title}
    </Text>
  </Card>
)
