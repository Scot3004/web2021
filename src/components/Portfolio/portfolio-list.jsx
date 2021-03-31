/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Flex } from 'theme-ui'

import PortfolioLink from './portfolio-link'

const PortfolioList = ({ posts }) => (
  <Flex
    sx={{
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    }}
  >
    {posts.map(( {node} ) => (
      <PortfolioLink
        key={node.slug}
        title={node.frontmatter.title}
        excerpt={node.excerpt}
        slug={node.slug}
        image={node.frontmatter.image}
        />

    ))}
  </Flex>
)

export default PortfolioList
