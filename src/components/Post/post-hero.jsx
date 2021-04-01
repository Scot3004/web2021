import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const Hero = ({ image, alt }) => (
  <>
    {image?.childImageSharp && (
      <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={alt} />
    )}
  </>
)

export default Hero
