import React from "react"
import { navigate } from "gatsby"

import styles from "./selectItem.module.css"

export const SelectItem = ({ datas, path, type, cycle }) => {
  const handleChange = e => {
    if (type === "currency") {
      return navigate(e.currentTarget.value, { state: { cycle } })
    }
    navigate(path, { state: { cycle: e.currentTarget.value } })
  }
  return (
    <select onChange={handleChange} value={type === "cycle" ? cycle : path}>
      {datas.map(data => (
        <option key={data.value} value={data.value}>
          {data.displayValue}
        </option>
      ))}
    </select>
  )
}
