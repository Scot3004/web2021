import React from 'react'
import { SidebarProvider } from './src/context/SidebarContext'
export const wrapRootElement = ({ element }) => (
  <SidebarProvider>{element}</SidebarProvider>
)
