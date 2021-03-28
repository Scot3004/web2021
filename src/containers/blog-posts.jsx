import React from 'react'

import Layout from './layout'
import SEO from './seo'
import Footer from '../components/ui/page-footer'
import Header from '../components/Header/header'
import PostList from '../components/Blog/blog-list'

const Posts = ({ location, posts, socialLinks }) => (
  <Layout location={location} header={<Header>Blog</Header>} >
    <SEO title="Blog" />
    <main>
      <PostList posts={posts} />
    </main>
    <Footer socialLinks={socialLinks} />
  </Layout>
)

export default Posts
