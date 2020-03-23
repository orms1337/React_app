import React, { Component } from "react";
import Topbar from "./Topbar";

export default class DefaultLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <div>
          <Topbar />
        </div>
        <div>{children}</div>
      </div>
    );
  }
}
