/** @jsx jsx */
import { jsx } from 'theme-ui'
import { GatsbyImage, getSrc, getImage } from "gatsby-plugin-image"

const GalleryItems = ({ items }) => (
  <div sx={{
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  }}>
    {items?.map((item) => {
      const image = getImage(item.image.thumbnail)
      return (
        <a
          key={item.alt}
          href={getSrc(item.image.full)}
          data-attribute="SRL"
          sx={{
            margin: "10px"
          }}
        >
          <GatsbyImage image={image} alt=""/>
        </a>
      )
    })}
  </div>
)

export default GalleryItems
