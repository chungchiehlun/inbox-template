import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/app";
import reducer from "./redux/reducer";

import "normalize.css";
import "font-awesome/css/font-awesome.css";
import "./stylesheets/basic.css";
import "./stylesheets/color.css";

let store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
