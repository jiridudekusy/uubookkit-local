//@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import UU5 from "uu5g04";
import Cfg from "../config/config.js";

import "./bottom.less";
//@viewOff:imports

export const Bottom = createReactClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Cfg.NAMESPACE + "Bottom",
    classNames: {
      main: Cfg.CSS + "bottom"
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
      <UU5.Common.Div {...this.getMainPropsToPass()}>
        Powered by Unicorn Application Framework
      </UU5.Common.Div>
    );
  }
  //@@viewOff:render
});

export default Bottom;
