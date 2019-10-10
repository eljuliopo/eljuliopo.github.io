/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using itconst path = require('path')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const portfolioTemplate = path.resolve('src/pages/portfolio-template.js')
    resolve(
      graphql(`
        {
          allContentfulBook {
            edges {
              node {
                id
              }
            }
          }
        }
          `).then(result => {
                  if (result.errors) {
                    reject(result.errors)
                  }
                  result.data.allContentfulBook.edges.forEach(edge => {
                    createPage({
                      path: edge.node.id,
                      component: portfolioTemplate,
                      context: {
                        id: edge.node.id,
                      },
                    })
                  })
                  return
                })
              )
            })
          }
