import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import PostHero from '../Post/post-hero'
import PostTitle from '../Post/post-title'
import PostDate from '../Post/post-date'

export default ({ post }) => (
  <main>
    <PostHero post={post} />
    <PostTitle sx={{ mb: 0 }}>{post.title}</PostTitle>
    <PostDate sx={{ mb: 3 }}>{post.date}</PostDate>
    <MDXRenderer>{post.body}</MDXRenderer>
  </main>
)
