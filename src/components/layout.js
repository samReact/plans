import React from "react"
import styles from "./layout.module.css"

export default ({ children }) => (
  <div className={styles.container}>{children}</div>
)
