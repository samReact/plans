import React from "react"
import styles from "./tdDescription.module.css"

const TdDescription = props => {
  const { title } = props
  const { container } = styles

  return <td className={container}>{title}</td>
}

export default TdDescription
