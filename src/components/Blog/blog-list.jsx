/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Flex, css } from 'theme-ui'

import PostLink from './blog-link'

const PostList = ({ posts }) => (
  <Flex
    sx={{
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    }}
  >
    {posts.map(( node ) => (
      <PostLink key={node.slug} {...node} />
    ))}
  </Flex>
)

export default PostList
