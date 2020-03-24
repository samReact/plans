exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allProtonPlan {
        nodes {
          Currency
        }
      }
    }
  `)
  data.allProtonPlan.nodes.forEach(node => {
    const slug = node.Currency
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/table.js`),
      context: { slug: slug },
    })
  })
}
