//@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu_plus4u5g01-bricks";
import "uu_plus4u5g01-app";
import Cfg from "../config/config.js";

import SpaAuthenticated from "./spa-authenticated.js";

import "./spa.less";
//@viewOff:imports

const Spa = createReactClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.CcrWriterMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Cfg.NAMESPACE + "Spa",
    classNames: {
      main: Cfg.CSS + "spa"
    },
    opt: {
      // Spa is registered in Central Component Registry by key 'spaCCRkey' (stored in configuration)
      // Any descendant component can get Spa with method this.getCcrComponentByKey from CcrReaderMixin.
      // SPA has Identity mixin and every information about logged user is available by calling 'getIdentity' method
      ccrKey: Cfg.SPA_CCR_KEY
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
    let child;
    child = <SpaAuthenticated {...this.getMainPropsToPass()}/>;
    return child;
  }
  //@@viewOff:render
});

export default Spa;
