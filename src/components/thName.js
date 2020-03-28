import React from "react"
import styles from "./thName.module.css"

const ThName = props => {
  const { children, planName } = props
  const { container, content, featured, name } = styles

  return (
    <th className={container}>
      <div className={content}>
        {planName === "plus" && <span className={featured}>most popular</span>}
        <span className={name}>{children}</span>
      </div>
    </th>
  )
}

export default ThName
