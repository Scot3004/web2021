/** @jsx jsx */
import { jsx } from "theme-ui"
import PostHero from "../Post/post-hero"
import PostTitle from "../Post/post-title"
import PostDate from "../Post/post-date"

const BlogPost = ({ title, date, children, image }) => (
  <main>
    <PostHero image={image} />
    <PostTitle sx={{ mb: 0 }}>{title}</PostTitle>
    <PostDate sx={{ mb: 3 }}>{date}</PostDate>
    {children}
  </main>
)

export default BlogPost
