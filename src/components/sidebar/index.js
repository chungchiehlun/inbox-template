import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.module.css";

class Sidebar extends Component {
  render() {
    return (
      <aside styleName="sidebar">
        <nav>
          <button styleName="compose" onClick={this.props.openOverlay}>
            <FontAwesomeIcon icon="pencil-alt" />
          </button>
          <ul styleName="categories">
            <li>
              <div styleName="notification">
                <span>5</span>
              </div>
              <FontAwesomeIcon icon="inbox" styleName="icon icon-is-active" />
            </li>
            <li>
              <FontAwesomeIcon icon="star" styleName="icon" />
            </li>
            <li>
              <FontAwesomeIcon icon="paper-plane" styleName="icon" />
            </li>
            <li>
              <FontAwesomeIcon icon="trash-alt" styleName="icon" />
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
    );
  }
}

export default connect(null, (dispatch) => {
  return {
    openOverlay: () => dispatch({ type: "OPEN_OVERLAY" }),
  };
})(Sidebar);
