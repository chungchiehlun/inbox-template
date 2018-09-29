import React from "react";
import "./index.module.css";

const Toolbar = () => (
  <div styleName="toolbar">
    <ul styleName="actions">
      <li styleName="item" />
      <li styleName="item" />
      <li styleName="item" />
    </ul>
    <div>
      <input
        styleName="search"
        type="search"
        defaultValue="#Swedish"
        placeholder="Type to search"
      />
      <button styleName="searchBtn">
        <i className="fa fa-search" />
      </button>
    </div>
  </div>
);

export default Toolbar;
