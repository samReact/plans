import React, { useState, useEffect } from "react"

import tableStyles from "./table.module.css"
import SelectButton from "../components/selectButton"
import TdListItem from "../components/tdListItem"
import TdDescription from "../components/tdDescription"
import ThName from "../components/thName"
import TdPrice from "../components/tdPrice"
import TdButton from "../components/tdButton"
import SelectGroup from "../components/selectGroup"
import Layout from "../components/layout.js"

const Table = ({ location, data, pageContext }) => {
  const [cycle, setCycle] = useState("_1")
  const { allProtonPlan } = data
  const { nodes } = allProtonPlan
  const { additionalData } = pageContext

  useEffect(() => {
    if (location && location.state && location.state.cycle) {
      setCycle(location.state.cycle)
    }
  }, [location])

  return (
    <Layout>
      <h4>Plans & prices</h4>
      <SelectGroup path={location.pathname} cycle={cycle} />
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <ThName planName="free">Free</ThName>
            {nodes.map(node => (
              <ThName key={node.id} planName={node.Name}>
                {node.Name}
              </ThName>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <TdPrice monthlyPrice={0} path={location.pathname} />
            {nodes.map(node => (
              <TdPrice
                path={location.pathname}
                key={node.id}
                cycle={cycle}
                prices={node.Pricing}
                yearlyPrice={node.Pricing._12}
              />
            ))}
          </tr>
          <tr>
            {additionalData.descriptions.map(description => (
              <TdDescription key={description.id} title={description.value} />
            ))}
          </tr>
          <tr>
            <TdListItem title="1 User" />
            {nodes.map(node => (
              <TdListItem key={node.id} title={`${node.MaxMembers} User`} />
            ))}
          </tr>
          <tr>
            <TdListItem title="500 MB" />
            {nodes.map(node => (
              <TdListItem
                key={node.id}
                title={`${Math.floor(node.MaxSpace / 10e8 / 5) * 5} GB`}
              />
            ))}
          </tr>
          <tr>
            <TdListItem title="1 address" />
            {nodes.map(node => (
              <TdListItem
                key={node.id}
                title={`${node.MaxAddresses} addresses`}
              />
            ))}
          </tr>
          <tr>
            <TdListItem title="No domain support" />
            {nodes.map(node => (
              <TdListItem
                key={node.id}
                title={`Supports ${node.MaxDomains} domains`}
              />
            ))}
          </tr>
          <tr>
            <TdListItem title="ProtonVPN (optional)" />
            {additionalData.features.map(feature => (
              <TdListItem key={feature.id} title={feature.value} />
            ))}
          </tr>
          <tr>
            <td></td>
            {nodes.map(node => (
              <TdListItem
                key={node.id}
                title={
                  node.MaxVPN > 0
                    ? "Includes ProtonVPN"
                    : "ProtonVPN (optional)"
                }
              />
            ))}
          </tr>
          <tr>
            <TdButton>
              <SelectButton title="Select" plan="Free" />
            </TdButton>
            {nodes.map(node => (
              <TdButton key={node.id}>
                <SelectButton title="Select" plan={node} />
              </TdButton>
            ))}
          </tr>
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allProtonPlan(
      filter: {
        Currency: { eq: $slug }
        Name: { in: ["plus", "professional", "visionary"] }
      }
    ) {
      nodes {
        id
        Currency
        ID
        MaxAddresses
        MaxDomains
        MaxMembers
        MaxSpace
        MaxVPN
        Name
        Pricing {
          _1
          _12
          _24
        }
        Features
      }
    }
  }
`

export default Table
