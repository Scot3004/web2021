/** @jsx jsx */
import { jsx } from 'theme-ui'

import HomePageLink from './homepage-link'

export default ({title}) => (
  <div
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
    }}
  >
    <HomePageLink />
    <span sx={{ ml: 2, fontSize: [42], color: 'primary' }}>{title}</span>
  </div>
)
