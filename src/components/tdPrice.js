import React, { useState, useEffect } from "react"
import styles from "./tdPrice.module.css"

const TdPrice = props => {
  const { container, amount, info, content } = styles
  const { prices, yearlyPrice, path, cycle } = props
  const [price, setPrice] = useState("")
  const [currencySymbol, setCurrencySymbol] = useState("")

  useEffect(() => {
    switch (path) {
      case "/EUR":
        return setCurrencySymbol("€")
      case "/USD":
        return setCurrencySymbol("$")
      case "/CHF":
        return setCurrencySymbol("CHF")
      default:
        return null
    }
  }, [path])

  useEffect(() => {
    if (cycle && prices) {
      switch (cycle) {
        case "_1":
          return setPrice(prices._1)
        case "_12":
          return setPrice(prices._12)
        case "_24":
          return setPrice(prices._24)
        default:
          return setPrice(prices._1)
      }
    }
  }, [cycle, prices])

  return (
    <td className={container}>
      <span className={content}>
        {currencySymbol} <span className={amount}>{price / 100}</span>
        /mo
        {yearlyPrice && (
          <span className={info}>
            Billed as {currencySymbol}
            {yearlyPrice / 100} per year
          </span>
        )}
      </span>
    </td>
  )
}

export default TdPrice
