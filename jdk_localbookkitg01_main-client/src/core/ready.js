//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import UU5 from "uu5g04";
import "uu5g04-bricks";
import Cfg from "../config/config.js";

import * as Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-app";

import Lsi from "../config/lsi.js";
import Left from "./left.js";
import Bottom from "./bottom.js";
import About from "../routes/about.js";
import Home from "../routes/home.js";
import Page from "../routes/bookPage.js";
import "./ready.less";
//@@viewOff:imports

const Ready = createReactClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Cfg.NAMESPACE + "Ready",
    classNames: {
      main: Cfg.CSS + "ready"
    },
    lsi: {
      name: Lsi.appName
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    // data loaded from server are passed by prop data
    bookData: PropTypes.shape()
  },
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  getDefaultProps() {
    return {
      data: null
    }
  },
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
      // NOTE: Data loaded from server are available in prop data
      // this.props.data

      <Plus4U5.App.Page
        {...this.getMainPropsToPass()}
        top={<Plus4U5.App.Top content={this.getLsiComponent("name")} />}
        bottom={<Bottom />}
        type={2}
        displayedLanguages={["cs", "en"]}
        left={<Left bookData={this.props.bookData}/>}
        leftWidth="!xs-320px !s-320px !m-256px l-256px xl-256px"
      >
        <UU5.Common.Router
          route=""
          routes={{
            //**************
            // Here add other application routes
            //**************
            // key is name of route and part of application url
            // component is in file in folder routes
            "home": { component: <Home /> },
            "": "home",
            "about": { component: <About /> },
            "book/page": { component: <Page refireLoad controlled/> }
          }}
          notFoundRoute={"home"}
        />
      </Plus4U5.App.Page>
    );
  }
  //@@viewOff:render
});

export default Ready;
