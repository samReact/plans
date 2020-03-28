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
      context: {
        slug: slug,
        additionalData: {
          descriptions: [
            {
              id: 0,
              value: "The basics for private and secure communications",
            },
            { id: 1, value: "Fully featured mailbox with advanced protection" },
            { id: 2, value: "ProtonMail for professionals and businesses" },
            { id: 3, value: "Protection for families and small businesses" },
          ],
          features: [
            {
              id: 1,
              value:
                "Supports folders, labels, filters auto-reply, IMAP, SMTP and more",
            },
            {
              id: 2,
              value:
                "Catch all emails, multi users management, priority support and more",
            },
            { id: 3, value: "Priority support" },
          ],
        },
      },
    })
  })
}
