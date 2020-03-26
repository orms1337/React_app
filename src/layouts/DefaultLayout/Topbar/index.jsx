import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.sass";
export default class Topbar extends Component {
  render() {
    return (
      <div className="topbar">
        <ul className="topbar__list">
          <li className="topbar__list__item">
            <Link className="top_link" to="/">
              Home page
            </Link>
          </li>
          <li className="topbar__list__item">
            <Link className="top_link" to="/table">
              Table
            </Link>
          </li>
          <li className="topbar__list__item">
            <Link className="top_link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
