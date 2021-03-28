import { Fragment } from 'react'
/** @jsx jsx */
import { Themed, jsx } from 'theme-ui'

const Footer = ({ socialLinks }) => (
  <footer
    sx={{
      mt: 4,
      pt: 3,
    }}
  >
    © {new Date().getFullYear()},
    Sígueme en: {socialLinks
      ? socialLinks.map((platform, i, arr) => (
          <Fragment key={platform.url}>
            <Themed.a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform.name}
            </Themed.a>
            {arr.length - 1 !== i && (
              <Fragment>, </Fragment>
            )}
          </Fragment>
        ))
      : null}
{` `}&bull;{` `}
    Hecho usando
    {` `}
    <Themed.a href="https://www.gatsbyjs.org">Gatsby</Themed.a>
  </footer>
)
export default Footer
