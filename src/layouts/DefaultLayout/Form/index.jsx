import React, { Component } from "react";
import InputMask from "react-input-mask";
import "./index.sass";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axiosInstance from "../../../helpers/axios";
import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";

export default class Form extends Component {
  state = { name: "", tel: "", formIsOpen: false };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    const { name, tel } = this.state;
    axiosInstance
      .post(process.env.REACT_APP_BACKEND_URL + "/", {
        name,
        phone: tel.trim(),
      })
      .then((response) => {
        console.log(response.data);
        toast.success("Ваша заявка отправлена");
      });

    event.preventDefault();
  };

  handleClose = () => {
    this.setState({ formIsOpen: !this.state.formIsOpen });
  };

  render() {
    const Pulse = styled.button`
      animation: 1s ${keyframes`${pulse}`} infinite;
    `;
    const closeIcon = require("../../../assets/close.png");
    const phoneIcon = require("../../../assets/phone.png");
    const { formIsOpen } = this.state;
    return formIsOpen ? (
      <form
        className="form_cust"
        name="form"
        method="POST"
        onSubmit={this.handleSubmit}
      >
        <button
          className="close_button"
          type="button"
          onClick={this.handleClose}
        >
          <img src={closeIcon} alt="" style={{ height: 16, width: 16 }} />
        </button>
        <legend className="cust_legend">Заказать звонок</legend>

        <input
          className="element_form"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          required
          placeholder="Имя"
        />

        <InputMask
          className="element_form"
          mask="+7 999 999 99 99"
          name="tel"
          maskChar=" "
          value={this.state.valueTel}
          onChange={this.handleChange}
          placeholder="Телефон"
          required
        />
        <button type="submit" className="button_form">
          Заказать
        </button>
      </form>
    ) : (
      <Pulse className="closed_form" onClick={this.handleClose} type="button">
        <img src={phoneIcon} alt="" style={{ width: 30, height: 30 }} />
      </Pulse>
    );
  }
}
