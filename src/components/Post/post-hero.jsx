import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"

const Hero = ({ image }) => (
  <>
    {image?.childImageSharp && (
      <GatsbyImage image={image.childImageSharp.gatsbyImageData}/>
    )}
  </>
)

export default Hero
