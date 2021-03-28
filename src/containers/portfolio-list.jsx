/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from 'theme-ui'

import Layout from './layout'
import SEO from './seo'
import Header from '../components/Header/header'
import PortfolioLink from '../components/Portfolio/portfolio-link'
import Footer from '../components/ui/page-footer'

export default ({ location, posts, socialLinks }) => {
  return (
    <Layout location={location} header={<Header>Portafolio</Header>} >
      <SEO title="Portafolio" />
      <Flex
        sx={{
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {posts.map(({ node }) => (
          <PortfolioLink key={node.slug} {...node} />
        ))}
      </Flex>
      <Footer socialLinks={ socialLinks }/>
    </Layout>
  )
}
