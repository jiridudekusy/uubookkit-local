//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import UU5 from "uu5g04";
import "uu5g04-bricks";
import Cfg from "../config/config.js";

import "./error.less";
//@@viewOff:imports

const Error = createReactClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Cfg.NAMESPACE + ".Error",
    classNames: {
      main: Cfg.CSS + "error"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
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
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      // Specify your error here.
      // For example: User has no rights, application server doesn't respond etc.
      <UU5.Bricks.Error/>
    );
  }
  //@@viewOff:render
});

export default Error;
