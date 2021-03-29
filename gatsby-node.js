const contentTemplate = {
  'blog': `./src/templates/blog-post.jsx`,
  'portafolio': `./src/templates/portafolio-post.jsx`
}

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
const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id,
            slug,
            fields {
              contentType
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges

  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    const slug = `${node.fields.contentType}/${node.slug}`

    createPage({
      path: slug,
      component: path.resolve(contentTemplate[node.fields.contentType]),
      context: { slug: slug, id: node.id },
    })
  })
}
