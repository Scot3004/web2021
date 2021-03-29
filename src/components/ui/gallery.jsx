/** @jsx jsx */
import { jsx } from 'theme-ui'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import { GatsbyImage } from "gatsby-plugin-image"

const options = {
  settings: {
    autoplaySpeed: 1500,
    transitionSpeed: 900,
  },
  thumbnail: {
    thumbnailsGap: '20px',
  },
}

const gallery = ({ items }) => (
  <SimpleReactLightbox>
    <SRLWrapper options={options}>
      <div sx={{
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}>
        {items.map((item) => (
          <a
            key={item.alt}
            href={item.image.publicURL}
            data-attribute="SRL"
            sx={{
              margin: "10px"
            }}
          >
            <GatsbyImage image={item.image.thumbnail.gatsbyImageData}/>
          </a>
        ))}
      </div>
    </SRLWrapper>
  </SimpleReactLightbox>
)

export default gallery
