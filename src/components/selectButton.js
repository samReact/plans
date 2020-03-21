import React from "react"
import selectButtonStyles from "./selectButton.module.css"

export default props => (
  <button
    className={selectButtonStyles.button}
    type="button"
    name="selectButton"
  >
    {props.title}
  </button>
)
