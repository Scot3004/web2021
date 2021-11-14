/** @jsx jsx */
import { Themed, Card, Text, jsx } from "theme-ui"
import { Link } from "gatsby"
import PostDate from "../Post/post-date"

const PostLink = ({ title, slug, date, excerpt, image }) => (
  <Card
    as={Link}
    to={slug}
    sx={{
      flex: ["0 1 100%", "0 1 45%"],
      padding: "1rem",
      mb: "1.5rem"
    }}
  >
    <Text
      sx={{
        color: "primary",
        fontFamily: "heading",
      }}
    >
      <h2
        sx={{
          margin: 0,
        }}
      >
        {title}
      </h2>
      <PostDate sx={{ color: "text" }}>{date}</PostDate>
      <Themed.p
        sx={{
          color: "text",
          margin: 0,
        }}
      >
        {excerpt}
      </Themed.p>
    </Text>
  </Card>
)

export default PostLink
