import { Fragment } from "react"
/** @jsx jsx */
import { Themed, jsx } from "theme-ui"

const Footer = ({ socialLinks }) => (
  <footer
    sx={{
      mt: "1rem",
      position: "absolute",
      bottom: 0,
      height: "2rem"
    }}
  >
    Sígueme en:{" "}
    {socialLinks
      ? socialLinks.map((platform, i, arr) => (
          <Fragment key={platform.url}>
            <Themed.a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform.name}
            </Themed.a>
            {arr.length - 1 !== i && <Fragment>, </Fragment>}
          </Fragment>
        ))
      : null}
    {` `}
  </footer>
)
export default Footer
