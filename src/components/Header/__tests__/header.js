import { ThemeProvider } from "@theme-ui/theme-provider"
import React from "react"
import renderer from "react-test-renderer"
import Header from "../header"

const theme = {
  colors: {
    primary: "red",
  },
}

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
