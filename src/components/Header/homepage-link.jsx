/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'

import Logo from '../../assets/logo.svg'

export default () => (
  <div>
    <Link
      to="/"
    >
      <img
        src={Logo}
        alt="logo"
        sx={{
          width: [36],
          height: [36],
          verticalAlign: 'middle',
          borderRadius: "50%",
          transition: "box-shadow .5s",
          boxShadow: theme => `2px 2px 8px ${theme.colors.primary}`,
          ":hover": {
            boxShadow: theme => `2px 2px 8px ${theme.colors.hover}`,
          },
        }}></img>
    </Link>
  </div>
)
