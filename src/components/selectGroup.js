import React from "react"

import { SelectItem as SelectCurrency } from "./selectItem"
import { SelectItem as SelectCycle } from "./selectItem"
import styles from "./selectGroup.module.css"

const currencies = [
  { value: "/CHF", displayValue: "CHF" },
  { value: "/USD", displayValue: "$ USD" },
  { value: "/EUR", displayValue: "€ Euros" },
]

const cycles = [
  { value: "_1", displayValue: "Monthly" },
  { value: "_12", displayValue: "Annually" },
  { value: "_24", displayValue: "2 years" },
]

const SelectGroup = ({ path, cycle }) => {
  const { container } = styles
  return (
    <div className={container}>
      <SelectCycle type="cycle" path={path} cycle={cycle} datas={cycles} />
      <SelectCurrency
        path={path}
        cycle={cycle}
        type="currency"
        datas={currencies}
      />
    </div>
  )
}

export default SelectGroup
