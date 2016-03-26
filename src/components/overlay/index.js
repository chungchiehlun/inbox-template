import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './index.css'
import {connect} from 'react-redux'

@connect((state) => {
  return {
    overlayIsOpen: state.overlay
  }
}, (dispatch)=>{
  return {
    closeOverlay: (e) => dispatch({ type: 'CLOSE_OVERLAY' })
  }
})
@CSSModules(styles)
class Overlay extends Component {
  render() {
    console.dir(this.props.overlayIsOpen)
    return(
      <div styleName={ (this.props.overlayIsOpen ) ? "overlay-active" : "overlay" }>
        <div styleName="modal">
          <div styleName="title">New message<span styleName="close" onClick = { this.props.closeOverlay }></span></div>
          <div styleName="body">
            <form styleName="form">
              <input type="text" placeholder="To"/>
              <input type="text" placeholder="Subject"/>
              <textarea name="message" rows="5" placeholder="Your text"></textarea>
              <div styleName="button">
                <button styleName="btnVal">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Overlay
