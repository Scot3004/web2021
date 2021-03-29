/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Flex } from 'theme-ui'

import PostLink from './blog-link'

const PostList = ({ posts }) => (
  <Flex
    sx={{
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    }}
  >
    {posts.map(( {node} ) => (
      <PostLink
        key={node.slug}
        title={node.frontmatter.title}
        date={node.frontmatter.date}
        excerpt={node.excerpt}
        slug={node.slug}
        />

    ))}
  </Flex>
)

export default PostList
