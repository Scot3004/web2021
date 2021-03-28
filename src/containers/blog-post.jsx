import React from 'react'

import Layout from './layout'
import SEO from './seo'
import BlogPost from '../components/Blog/blog-post'
import PostFooter from './post-footer'
import HeaderLink from '../components/Header/header-link'

const BlogLink = <HeaderLink to="/blog" >Blog</HeaderLink>

const Post = ({
  data: {
    post
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} header={BlogLink}>
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
    <BlogPost post={post} />
    <PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post
