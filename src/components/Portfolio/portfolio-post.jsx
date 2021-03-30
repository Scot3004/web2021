/** @jsx jsx */
import { jsx } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import PostHero from '../Post/post-hero'
import PostTitle from '../Post/post-title'
import Gallery from '../ui/gallery'
import { PlaylistAddCheck, Person } from '@emotion-icons/material-twotone'

export default ({ title, role, responsibilities, body, gallery, image }) => (
  <main>
    <PostHero image={image} />
    <PostTitle sx={{mt: 3 }}>{title}</PostTitle>
    <p>
      <Person size={24} sx={{
        position: "relative",
        top: "-2px"
      }}/>{role}
    </p>
    <p>
      <PlaylistAddCheck size={24}  sx={{
        position: "relative",
        top: "-2px"
      }}/>{responsibilities}</p>
    <MDXRenderer>{body}</MDXRenderer>
    <Gallery items={gallery} />
  </main>
)
