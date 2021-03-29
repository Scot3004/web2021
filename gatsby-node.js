exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `contentType`,
      value: getNode(node.parent).sourceInstanceName,
    })
  }
}
