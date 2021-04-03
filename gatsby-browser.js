import React from "react"
import { SidebarProvider } from "./src/context/SidebarContext"
export const wrapRootElement = ({ element }) => (
  <SidebarProvider>{element}</SidebarProvider>
)

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(`
    Hice cambios en este sitio web,
    ¿deseas recargar para aplicarlos?
  `)
  if (answer === true) {
    window.location.reload()
  }
}
