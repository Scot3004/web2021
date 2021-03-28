/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import Logo from '../../assets/logo.svg'
import { useSiteMetadata } from '../../hooks/use-site-metadata'

export default ({ setOpen }) => {
  const { sidebar } = useSiteMetadata()

  return (
    <div>
      <Link
        to="/"
        onClick={setOpen}
        sx={{
          variant: 'styles.navLink',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <img src={Logo} alt="logo" sx={{ width: 128 }}></img>
        <p sx={{ fontSize: '2rem', mb: '0.5rem' }}>{sidebar.title}</p>
        <p sx={{ fontSize: 16, color: 'sidebar.color', margin: 0 }}>
          {sidebar.subtitle}
        </p>
      </Link>
      <hr sx={{ width: '10%', margin: '10px auto 0' }}></hr>
    </div>
  )
}
