//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import UU5 from "uu5g04";
import "uu5g04-bricks";
import Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-bricks";
import Cfg from "../config/config.js";

import Lsi from "../config/lsi.js";
import WelcomeRow from "../bricks/welcome-row.js";

import "./home.less";
//@@viewOff:imports

const Home = createReactClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.RouteMixin,
    UU5.Common.CcrReaderMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Cfg.NAMESPACE + ".Home",
    classNames: {
      main: Cfg.CSS + "home",
      welcomeRow: Cfg.CSS + "home-welcomerow",
      welcome: Cfg.CSS + "home-welcome"
    },
    lsi: Lsi.auth
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
    // Identity can be read from Spa, because it has IdentityMixin.
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        <UU5.Bricks.P>
          Local uuBookit application. Choose page from left menu.
        </UU5.Bricks.P>
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default Home;
