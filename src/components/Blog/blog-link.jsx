/** @jsx jsx */
import { Themed, Card, Text, jsx } from 'theme-ui'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import PostDate from '../Post/post-date'

const PostLink = ({ title, slug, date, excerpt, image }) => (
  <Card
    as={Link}
    to={slug}
    sx={{
      flex: ['0 1 100%', '0 1 49%'],
    }}
  >
    {image && (
      <Img
        sizes={{ ...image.childImageSharp.fluid, aspectRatio: 16 / 9 }}
      ></Img>
    )}
    <Text
      sx={{
        color: 'primary',
        fontFamily: 'heading',
        padding: 2,
      }}
    >
      <h2
        sx={{
          margin: 0,
        }}
      >
        {title}
      </h2>
      <PostDate sx={{ color: 'text' }}>{date}</PostDate>
      <Themed.p
        sx={{
          color: 'text',
          margin: 0,
        }}
      >
        {excerpt}
      </Themed.p>
    </Text>
  </Card>
)

export default PostLink
