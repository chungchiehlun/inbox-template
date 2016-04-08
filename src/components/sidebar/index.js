import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './index.css'
import { connect } from 'react-redux'

@connect(null, (dispatch) => {
  return {
    openOverlay: () => dispatch({ type: 'OPEN_OVERLAY' })
  }
})
@CSSModules(styles)
class Sidebar extends Component {
  static propTypes = {
    openOverlay: PropTypes.func
  }
  render() {
    return (
      <aside styleName="sidebar">
        <nav>
          <button styleName="compose" onClick={ this.props.openOverlay }>
            <i styleName="pencil" />
          </button>
          <ul styleName="categories">
            <li>
              <div styleName="notification">
                <span>5</span>
              </div>
              <i styleName="inbox" style={{ opacity: 1 }}/>
            </li>
            <li>
              <i styleName="star" />
            </li>
            <li>
              <i styleName="send" />
            </li>
            <li>
              <i styleName="trash" />
            </li>
          </ul>
        </nav>
        <ul>
          <li styleName="label-yellow" />
          <li styleName="label-blue" />
          <li styleName="label-red" />
          <li styleName="label-green" />
        </ul>
        <div styleName="user-profile">
          <i className="fa fa-cog" />
          <i className="fa fa-sign-out" />
        </div>
      </aside>
    )
  }
}

export default Sidebar
