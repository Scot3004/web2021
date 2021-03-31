/** @jsx jsx */
import { jsx, Card, Text } from 'theme-ui'
import { Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

const PortfolioLink = ({ slug, image, title }) => (
  <Card
    as={Link}
    sx={{
      flex: ['0 1 100%', '0 1 49%', '0 1 32%'],
    }}
    to={slug}
  >
    <GatsbyImage image={image?.childImageSharp.gatsbyImageData}
    sx={{
      borderTopRightRadius: 6,
      borderTopLeftRadius: 6,
      margin: 'auto'
    }}
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

export default PortfolioLink
