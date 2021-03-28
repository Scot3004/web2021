/** @jsx jsx */
import { jsx } from 'theme-ui'
import { SkipNavContent } from "@reach/skip-nav"

export default ({ children, sidebarOpen, header }) => (
  <div
    sx={{
      ml: [
        0,
        0,
        sidebarOpen ? (theme) => theme.sizes.sidebar : 0,
      ],
      transition: 'margin-left 0.3s ease-in-out;',
    }}
  >
    {header}
    <SkipNavContent />
    <div
     sx={{
        maxWidth: `container`,
        mx: `auto`,
        px: 3,
        py: 3,
      }}
    >
      {children}
    </div>
  </div>
)
