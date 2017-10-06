import React from 'react'
import './index.css'

const Toolbar = () => (
  <div styleName="toolbar">
    <ul styleName="actions">
      <li styleName="item" />
      <li styleName="item" />
      <li styleName="item" />
    </ul>
    <div>
      <input styleName="search" type="search" defaultValue="#Swedish" placeholder="Type to search"/>
      <button styleName="button">
        <i styleName="searchBtn" />
      </button>
    </div>
  </div>
)

export default Toolbar
