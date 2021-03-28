import React from 'react'
import Layout from './layout'
import SEO from './seo'
import PortfolioPost from '../components/Portfolio/portfolio-post'
import PostFooter from './post-footer'
import HeaderLink from '../components/Header/header-link'

const PortfolioLink = <HeaderLink to="/portafolio" >Portafolio</HeaderLink>

const Post = ({
  data: {
    portfolioPost: post,
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} header={PortfolioLink}>
    <SEO
      title={post.title}
      description={post.excerpt}
      imageSource={
        post.socialImage
          ? post.socialImage?.childImageSharp?.fluid.src
          : post.image?.childImageSharp?.fluid.src
      }
      keywords={post.keywords}
      imageAlt={post.imageAlt}
    />
    <PortfolioPost post={post} />
    <PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post
