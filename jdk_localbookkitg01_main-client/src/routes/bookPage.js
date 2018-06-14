//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu_plus4u5g01-bricks";
import Cfg from "../config/config.js";
import Calls from "calls";
import CodeKit from "uu5codekitg01";
//@@viewOff:imports

const Page = createReactClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.RouteMixin,
    UU5.Common.LoadMixin,
    UU5.Common.CcrReaderMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Cfg.NAMESPACE + ".Page",
    classNames: {
      main: Cfg.CSS + "page"
    },
    calls: {
      // name of method in calls.js file, this method is called when component is
      // created and should load data for authenticated user
      onLoad: "loadPage"
    },
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
  getInitialState() {
    return {
      mode: "content"
    }
  },
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overriding
  getOnLoadData_(props) {
    return {code: props.params.code}
  },
  //@@viewOff:overriding

  //@@viewOn:private
  _getChildren(data) {
    if (this.state.mode === "content") {
      return (<UU5.Bricks.Div {...this.getMainPropsToPass()} content={data.body}/>);
    } else {
      return (
        <CodeKit.JsonEditor
          value={JSON.stringify({body: data.body})}
          format="pretty"
          focus
        />)
    }
    // return data.body.map(bodyPart=><UU5.Bricks.Div content={bodyPart}/>)
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return [
      <UU5.Bricks.Row>
        <UU5.Bricks.ButtonSwitch
          switchedOn={this.state.mode === "content"}
          props={{
            onClick: () => {
              this.setState({
                mode: "content"
              });
            }
          }} onProps={{
          colorSchema: "success"
        }}>
          Content
        </UU5.Bricks.ButtonSwitch>
        <UU5.Bricks.ButtonSwitch
          switchedOn={this.state.mode === "source"}
          props={{
            onClick: () => {
              this.setState({
                mode: "source"
              });
            }
          }} onProps={{
          colorSchema: "success"
        }}>
          Source
        </UU5.Bricks.ButtonSwitch>
      </UU5.Bricks.Row>,
      this.getLoadFeedbackChildren(this._getChildren)
    ];
  }
  //@@viewOff:render
});

export default Page;
