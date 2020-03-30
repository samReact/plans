import React from "react"
import { Link } from "gatsby"

import logo from "../../static/logo.png"
import styles from "./index.module.css"

export default () => (
  <div className={styles.container}>
    <img src={logo} alt="logo" />
    <Link to="/EUR" className={styles.link}>
      Find All our Plans
    </Link>
  </div>
)
