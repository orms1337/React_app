import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.sass";
export default class Topbar extends Component {
  render() {
    const logo = require("../../../assets/logo.png");
    return (
      <div className="topbar">
        <img src={logo} className="logo" />
        <div className="topbar_buttons">
          <NavLink
            className="topbar_buttons__item"
            exact
            to="/"
            activeStyle={{ backgroundColor: "#9A0000" }}
          >
            Главная страница
          </NavLink>

          <NavLink
            className="topbar_buttons__item"
            to="/table"
            activeStyle={{ backgroundColor: "#9A0000" }}
          >
            Каталог товаров
          </NavLink>

          <NavLink
            className="topbar_buttons__item"
            to="/about"
            activeStyle={{ backgroundColor: "#9A0000" }}
          >
            Контакты
          </NavLink>
        </div>
      </div>
    );
  }
}
