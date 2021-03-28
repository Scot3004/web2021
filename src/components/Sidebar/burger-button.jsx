import React from 'react'
import styled from '@emotion/styled'

const StyledBurger = styled.button`
  position: fixed;
  top: 0.6rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) =>
      open
        ? (props) => props.theme.colors.sidebar.color
        : (props) => props.theme.colors.primary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-of-type {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-of-type(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-of-type(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

const StyledBackground = styled.div`
&::before {
  content: "";
  top: 0.15rem;
  left: 0.5rem;
  position: fixed;
  width: 48px;
  height: 48px;
  background: ${(props) => props.theme.colors.background};
  z-index: 99;
  border-radius: 10px;
}
`

const Burger = ({ open, setOpen }) => {
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)} aria-label="Toggle sidebar">
        <div />
        <div />
        <div />
      </StyledBurger>
      <StyledBackground></StyledBackground>
    </>
  )
}

export default Burger
