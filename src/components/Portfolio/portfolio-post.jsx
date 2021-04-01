/** @jsx jsx */
import { jsx } from 'theme-ui'
import PostHero from '../Post/post-hero'
import PostTitle from '../Post/post-title'
// import Gallery from '../ui/gallery'

import { PlaylistAddCheck, Person } from '@emotion-icons/material-twotone'




export default ({ children, title, role, responsibilities, gallery, image }) => (
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
    {children}
    {/* <Gallery items={gallery} /> */}
  </main>
)
