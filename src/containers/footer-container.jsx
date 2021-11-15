import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { useAvatar } from "../hooks/use-avatar"
import Footer from "../components/Footer/page-footer"

const FooterContainer = () => {
  const avatar = useAvatar()
  const { social, author } = useSiteMetadata()
  console.log(author)

  return <Footer socialLinks={social} author={author} avatar={avatar} />
}

export default FooterContainer
