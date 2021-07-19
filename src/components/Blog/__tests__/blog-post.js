import React from "react"
import renderer from "react-test-renderer"
import BlogPost from "../blog-post"

describe("BlogPost", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <BlogPost title="blog-post" image="testImage" date="2021-10-14">
          content
        </BlogPost>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
