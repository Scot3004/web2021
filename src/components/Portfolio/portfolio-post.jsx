/** @jsx jsx */
import { jsx } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Themed } from 'theme-ui'

import PostHero from '../Post/post-hero'
import PostTitle from '../Post/post-title'
import Gallery from '../ui/gallery'
import { PlaylistAddCheck, Person } from '@emotion-icons/material-twotone'

export default ({ post }) => (
  <main>
    <PostHero post={post} />
    <PostTitle sx={{mt: 3 }}>{post.title}</PostTitle>
    <Themed.p><Person size={24} sx={{
        position: "relative",
        top: "-2px"
      }}/> {post.role}</Themed.p>
    <Themed.p><PlaylistAddCheck size={24}  sx={{
        position: "relative",
        top: "-2px"
      }}/> {post.responsibilities}</Themed.p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <Gallery items={post.gallery} />
  </main>
)
