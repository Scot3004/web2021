/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Flex } from 'theme-ui'

import Portfolio from './portfolio-link'

const PostList = ({ posts }) => (
  <Flex
    sx={{
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    }}
  >
    {posts.map(( {node} ) => (
      <Portfolio
        key={node.slug}
        title={node.frontmatter.title}
        excerpt={node.excerpt}
        slug={node.slug}
        image={node.frontmatter.image}
        />

    ))}
  </Flex>
)

export default PostList
