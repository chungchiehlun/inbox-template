import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './index.css'
import {connect} from 'react-redux'

@connect(null, (dispatch)=>{
  return {
    openOverlay: (e) => dispatch({ type: 'OPEN_OVERLAY' })
  }
})
@CSSModules(styles)
class Sidebar extends Component {
  render() {
    return (
      <aside styleName="sidebar">
        <nav>
          <button styleName="compose" onClick={ this.props.openOverlay }>
            <i className="fa fa-pencil"/>
          </button>
          <ul styleName="categories">
            <li>
              <div styleName="notification">
                <span>5</span>
              </div>
              <i className="fa fa-inbox" style={{ opacity: 1 }}/>
            </li>
            <li>
              <i className="fa fa-star"/>
            </li>
            <li>
              <i className="fa fa-send"/>
            </li>
            <li>
              <i className="fa fa-trash"/>
            </li>
          </ul>
        </nav>
        <ul>
          <li styleName="label-yellow"/>
          <li styleName="label-blue"/>
          <li styleName="label-red"/>
          <li styleName="label-green"/>
        </ul>
        <div styleName="user-profile">
          <i className="fa fa-cog"/>
          <i className="fa fa-sign-out"/>
        </div>
      </aside>
    )
  }
}

export default Sidebar
