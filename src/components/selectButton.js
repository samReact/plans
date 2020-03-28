import React from "react"
import selectButtonStyles from "./selectButton.module.css"

export default ({ plan, title }) => {
  const { button } = selectButtonStyles
  return (
    <button
      className={button}
      type="button"
      name="selectButton"
      onClick={() => alert(`${plan.Name || "Free"} Plan`)}
    >
      {title}
    </button>
  )
}
