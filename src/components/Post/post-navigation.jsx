/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Themed, Flex, Link as ThemedLink } from "theme-ui"

const PostNavigation = ({ previous, next }) => (
  <footer>
    {(previous || next) && (
      <Flex
        as="ul"
        sx={{
          borderTop: theme => `1px solid ${theme.colors.primary}`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: "1rem",
          transition: "all .3s linear",
          pb: 0,
        }}
      >
        <li>
          {previous && (
            <ThemedLink as={Link} to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </ThemedLink>
          )}
        </li>
        <li>
          {next && (
            <ThemedLink as={Link} to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </ThemedLink>
          )}
        </li>
      </Flex>
    )}
  </footer>
)

export default PostNavigation
