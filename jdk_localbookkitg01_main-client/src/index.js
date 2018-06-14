if (module.hot) {
  require("react-hot-loader/patch");
}

import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import UU5 from "uu5g04";

import Spa from "./core/spa.js";

import "./index.less";

// propagate app version into environment
UU5.Environment["appVersion"] = process.env.VERSION;

// consider app as progressive web app, but not on iOS (OIDC login doesn't work there)
if (!navigator.userAgent.match(/iPhone|iPad|iPod/)) {
  let link = document.createElement("link");
  link.rel = "manifest";
  link.href = "assets/manifest.json";
  document.head.appendChild(link);
}

// following construct is same as ReactDOM.render(<Spa />, document.getElementById(targetElementId));
// <AppContainer> is feature for rendering component in browser after some changes in source file are made
// (this feature is not part of production code)
// store the target element selector to use it again during hot update
let _targetElementId;

export function render(targetElementId) {
  _targetElementId = targetElementId;

  ReactDOM.render(
    <AppContainer>
      <Spa />
    </AppContainer>,
    document.getElementById(targetElementId)
  );
}

if (module.hot) {
  module.hot.accept("./core/spa", () => {
    if (_targetElementId) render(_targetElementId);
  });
}
