import React from 'react'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

const options = {
  settings: {
    autoplaySpeed: 1500,
    transitionSpeed: 900,
  },
  thumbnail: {
    thumbnailsGap: '20px',
  },
}

const GalleryWrapper = ({ children }) => (
  <SimpleReactLightbox>
    <SRLWrapper options={options}>
      {children}
    </SRLWrapper>
  </SimpleReactLightbox>
)

export default GalleryWrapper
