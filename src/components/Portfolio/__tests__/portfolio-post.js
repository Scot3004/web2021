import React from "react"
import renderer from "react-test-renderer"
import PortfolioPost from "../portfolio-post"

const gallery = [
  {
    image: {
      thumbnail: "img1",
    },
    alt: "img1",
  },
  {
    image: {
      thumbnail: "img1",
    },
    alt: "img2",
  },
]

describe("PortfolioPost", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <PortfolioPost
          title="portfolio-post"
          role="my-role"
          responsibilities="my-responsibilities"
          gallery={gallery}
          image="testImage"
        >
          content
        </PortfolioPost>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
