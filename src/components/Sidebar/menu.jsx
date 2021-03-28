import styled from '@emotion/styled'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.colors.sidebar.background};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  overflow: auto;

  transition: transform 0.3s ease-in-out;
  width: 100%;

  @media (min-width: ${(props) => props.theme.sizes.sidebarBreakpoint}px) {
    width: ${(props) => props.theme.sizes.sidebar}px;
    top: 0;
    left: 0;
  }

  a {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.sidebar.color};
    font-family: ${(props) => props.theme.fonts.heading};
    text-decoration: none;
    transition: color 0.3s linear;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0.1em;
    word-wrap: break-word;

    @media (min-width: ${(props) => props.theme.sizes.sidebarBreakpoint}px) {
      justify-content: flex-start;
    }
  }
`

export default StyledMenu
