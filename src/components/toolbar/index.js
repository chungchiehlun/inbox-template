import React from "react";
import "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Toolbar = () => (
  <div styleName="toolbar">
    <ul styleName="actions">
      <li styleName="item" />
      <li styleName="item" />
      <li styleName="item" />
    </ul>
    <div styleName="search-container">
      <input
        styleName="search"
        type="search"
        defaultValue="#Swedish"
        placeholder="Type to search"
      />
      <button styleName="searchBtn">
        <FontAwesomeIcon icon="search" />
      </button>
    </div>
  </div>
);

export default Toolbar;
