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

        <div>{children}</div>
        <Form />
        <Footer />
      </div>
    );
  }
}
