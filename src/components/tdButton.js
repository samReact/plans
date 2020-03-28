import React from "react"
import styles from "./tdButton.module.css"

const TdButton = ({ children }) => {
  const { container } = styles
  return <td className={container}>{children}</td>
}

export default TdButton
