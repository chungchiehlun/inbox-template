import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './index.css'

class Toolbar extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div styleName="toolbar">
        <ul styleName="actions">
          <li styleName="item"/>
          <li styleName="item"/>
          <li styleName="item"/>
        </ul>
        <div>
          <input styleName="search" type="search" defaultValue="#Swedish" placeholder="Type to search"/>
          <button styleName="button">
            <i className="fa fa-search"/>
          </button>
        </div>
      </div>
    )
  }
}

export default CSSModules(Toolbar, styles)
