//@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import UU5 from "uu5g04";
import Plus4U5 from "uu_plus4u5g01"
import "uu5g04-bricks";
import PropTypes from "prop-types";
import Cfg from "../config/config.js";

import Lsi from "../config/lsi.js";
import LeftLink from "../bricks/left-link.js";

import "./left.less";
//@viewOff:imports

//@viewOn:static
const goHome = () => {
  UU5.Environment.App.menuRef.update("home");
  UU5.Environment.setRoute("home");
};
const tabHome = () => {
  let url = UU5.Common.Url.parse().setUseCase("home").toString();
  window.open(url, "_blank");
};
const setRoute = (component) => {
  let parts = component.code.split("?");
  let params = parts[1].split("=");
  UU5.Environment.setRoute(parts[0],{code: params[1]});
};
//@viewOff:static

export const Left = createReactClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Cfg.NAMESPACE + "Left",
    classNames: {
      main: Cfg.CSS + "left",
      logo: Cfg.CSS + "left-logo",
      menu: Cfg.CSS + "left-menu"
    },
    lsi: Lsi.leftLinks
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    // data loaded from server are passed by prop data
    bookData: PropTypes.shape()
  },
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overriding
  //@@viewOff:overriding

  //@@viewOn:private
  _getItems() {
    return this.props.bookData.menu.map(
      item => {
        return {
          code: `book/page?code=${item.page}`,
          indent: item.indent,
          content: item.label.cs
        }
      }
    );

    // return [
    //   {code: "home", content: this.getLsiComponent("home")}
    // ]
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        <UU5.Bricks.Div className={this.getClassName("logo")}>
          <UU5.Bricks.Link onClick={goHome} onWheelClick={tabHome} onCtrlClick={tabHome}>
            <UU5.Bricks.Image name="Logo" responsive src="assets/logo.png"/>
          </UU5.Bricks.Link>
        </UU5.Bricks.Div>

        <Plus4U5.App.Menu
          ref_={ref => UU5.Environment.App.menuRef = ref}
          className={this.getClassName("menu")}
          items={this._getItems()}
          onClick={setRoute}
          onWheelClick={tabHome}
          onCtrlClick={tabHome}
        />

        <LeftLink route="about">
          {this.getLsiComponent("about")}
        </LeftLink>
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default Left;
