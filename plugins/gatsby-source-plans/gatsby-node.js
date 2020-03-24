const fetch = require("node-fetch")
const queryString = require("query-string")

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  const processPlan = plan => {
    const nodeId = createNodeId(`proton-plan-${plan.ID}-${plan.Currency}`)
    const nodeContent = JSON.stringify(plan)
    const nodeData = Object.assign({}, plan, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `ProtonPlan`,
        content: nodeContent,
        contentDigest: createContentDigest(plan),
      },
    })
    return nodeData
  }

  const myHeaders = {
    "Content-Type": "application/json;charset=utf-8",
    "x-pm-appversion": "Other",
    Accept: "application/vnd.protonmail.v1+json",
  }

  const myInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  }

  const fetchData = async currency => {
    try {
      const response = await fetch(
        `https://api.protonmail.ch/payments/plans?Currency=${currency}`,
        myInit
      )
      const data = await response.json()
      return data.Plans.forEach(plan => {
        const nodeData = processPlan(plan)
        createNode(nodeData)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return fetchData("EUR")
    .then(() => fetchData("USD"))
    .then(() => fetchData("CHF"))
}
