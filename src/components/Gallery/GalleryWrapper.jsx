import React from "react"
import { SRLWrapper } from "simple-react-lightbox"

const options = {
  settings: {
    autoplaySpeed: 1500,
    transitionSpeed: 900,
  },
  thumbnail: {
    thumbnailsGap: "20px",
  },
}

const GalleryWrapper = ({ children }) => (
  <SRLWrapper options={options}>{children}</SRLWrapper>
)

export default GalleryWrapper
