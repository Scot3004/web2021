const React = require("react")

module.exports = {
  getImage: jest.fn().mockImplementation(image => image),
  getSrc: jest.fn().mockImplementation(() => "testSrc"),
  GatsbyImage: jest.fn().mockImplementation(({ image, ...rest }) =>
    React.createElement("img", {
      ...rest,
      src: image,
    })
  ),
}
