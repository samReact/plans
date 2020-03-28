import React from "react"
import arrow from "../../static/arrow-right.svg"
import styles from "./tdListItem.module.css"

const TdListItem = ({ title }) => {
  const { container, content, iconContainer, icon, text } = styles
  return (
    <td className={container}>
      <div className={content}>
        <span className={iconContainer}>
          <img src={arrow} alt="arrow" className={icon} />
        </span>
        <span className={text}>{title}</span>
      </div>
    </td>
  )
}
export default TdListItem
