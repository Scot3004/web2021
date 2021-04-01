/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import Header from "./header"

const HeaderLink = ({ children, ...props }) => (
  <Header>
    <Link
      {...props}
      sx={{
        color: "primary",
        textDecoration: "none",
        ":hover": {
          color: "hover",
        },
      }}
    >
      {children}
    </Link>
  </Header>
)

export default HeaderLink
