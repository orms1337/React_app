import React, { Component } from "react";
import Topbar from "./Topbar";
import Footer from "./Footer";
import Form from "./Form";

export default class DefaultLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Topbar />

        <div
          style={{
            marginLeft: "20%",
            marginRight: "20%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </div>
        <Form />
        {/* <Footer /> */}
      </div>
    );
  }
}
