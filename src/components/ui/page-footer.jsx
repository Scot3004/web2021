import React, { Fragment } from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

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
            <Styled.a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform.name}
            </Styled.a>
            {arr.length - 1 !== i && (
              <Fragment>, </Fragment>
            )}
          </Fragment>
        ))
      : null}
{` `}&bull;{` `}
    Hecho usando
    {` `}
    <Styled.a href="https://www.gatsbyjs.org">Gatsby</Styled.a>
  </footer>
)
export default Footer
