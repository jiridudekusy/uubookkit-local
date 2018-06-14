//@@viewOn:imports
import React from "react";
import PropTypes from "prop-types";
import createReactClass from "create-react-class";
import UU5 from "uu5g04";
import "uu5g04-bricks";
import Cfg from "../config/config.js";

import "./left-link.less";
//@@viewOff:imports

const LeftLink = createReactClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Cfg.NAMESPACE + ".LeftLink",
    classNames: {
      main: Cfg.CSS + "leftlink"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    route: PropTypes.string
  },
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  getDefaultProps() {
    return {
      route: null
    }
  },
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overriding
  _goRoute() {
    // to reset menu
    UU5.Environment.App.menuRef.update("");
    UU5.Environment.setRoute(this.props.route);
  },

  _tabRoute() {
    // to reset menu
    UU5.Environment.App.menuRef.update("");
    let url = UU5.Common.Url.parse().setUseCase(this.props.route).toString();
    window.open(url, "_blank");
  },

  //@@viewOff:overriding

  //@@viewOn:private
  _getChildren() {
    let children = React.Children.toArray(this.props.children);

    if (typeof this.props.route === "string") {
      children = (
        <UU5.Bricks.Link onClick={this._goRoute} onWheelClick={this._tabRoute} onCtrlClick={this._tabRoute}>
          {children}
        </UU5.Bricks.Link>
      )
    }

    return children;
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        {this._getChildren()}
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default LeftLink;
