/** @jsx jsx */
import { jsx } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Themed } from 'theme-ui'

// import PostHero from '../Post/post-hero'
import PostTitle from '../Post/post-title'
import Gallery from '../ui/gallery'
import { PlaylistAddCheck, Person } from '@emotion-icons/material-twotone'

export default ({ title, role, responsibilities, body, gallery }) => (
  <main>
    {/* <PostHero post={post} /> */}
    <PostTitle sx={{mt: 3 }}>{title}</PostTitle>
    <Themed.p><Person size={24} sx={{
        position: "relative",
        top: "-2px"
      }}/> {role}</Themed.p>
    <Themed.p><PlaylistAddCheck size={24}  sx={{
        position: "relative",
        top: "-2px"
      }}/> {responsibilities}</Themed.p>
    <MDXRenderer>{body}</MDXRenderer>
    {/* <Gallery items={gallery} /> */}
  </main>
)
