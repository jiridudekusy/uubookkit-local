//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import UU5 from "uu5g04";
import "uu5g04-bricks";
import Cfg from "../config/config.js";

import "uu_plus4u5g01-app";

import Calls from "calls";
import Ready from "./ready.js";
import Loading from "./loading.js";
import Error from "./error.js";


import "./spa-authenticated.less";
import PropTypes from "prop-types";
//@@viewOff:imports

const SpaAuthenticated = createReactClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.LoadMixin,
    UU5.Common.CcrWriterMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Cfg.NAMESPACE + "SpaAuthenticated",
    classNames: {
      main: Cfg.CSS + "spaauthenticated"
    },
    calls: {
      // name of method in calls.js file, this method is called when component is
      // created and should load data for authenticated user
      onLoad: "loadBook"
    },
    opt:{ // keys of CCR are stored in configuration file
      ccrKey: Cfg.SPA_AUTHENTICATED_CCR_KEY
    }

  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  componentWillMount() {
    this.setCalls(Calls);
  },
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  // This method can update data from some descendant component.
  // NOTE: method should be renamed according to data type (for example setCourseData or setBookData)
  // Method also can set data and change the route.
  setApplicationData(data, setStateCallback){
    this.setState({
      dtoOut: data,
    }, setStateCallback)
  },

  //@@viewOff:interface

  //@@viewOn:overriding
  //@@viewOff:overriding

  //@@viewOn:private
  //@@viewOff:private

  //@@viewOn:render
  render() {
    let child;
    switch (this.getLoadFeedback()) {
      // show loading component during data loading
      case "loading":
        child = (<Loading
          {...this.getMainPropsToPass()}
        />);
        break;
      // show Ready component after server call respond with data
      case "ready":
        child = (<Ready
          {...this.getMainPropsToPass()}
          // data from server call are here in dtoOut
          // data are loaded with method loadDataForSpaAuthenticated in call.js
          // loading data is provided by LoadMixin of this component
          bookData={this.getDtoOut()}
        />);
        break;
      default:
        // show error to user if anything goes wrong
        child = (<Error
            {...this.getMainPropsToPass()}
            errorData={this.getErrorData()}
          />
        );
    }
    return (child)
  }
  //@@viewOff:render
});

export default SpaAuthenticated;
