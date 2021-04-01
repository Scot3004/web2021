const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

const contentTemplate = {
  'blog': `./src/templates/blog-post.jsx`,
  'portafolio': `./src/templates/portafolio-post.jsx`
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `blog` })
    const contentType = getNode(node.parent).sourceInstanceName
    createNodeField({
      node,
      name: `contentType`,
      value: contentType,
    })
    createNodeField({
      node,
      name: `slug`,
      value: `/${contentType}${slug}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id,
            fields {
              slug,
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
    createPage({
      path: node.fields.slug,
      component: path.resolve(contentTemplate[node.fields.contentType]),
      context: { slug: node.fields.slug, id: node.id },
    })
  })
}
