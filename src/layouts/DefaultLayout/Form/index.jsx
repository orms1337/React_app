import React, { Component } from "react";
import InputMask from "react-input-mask";
import "./index.sass";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axiosInstance from "../../../helpers/axios";

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

  render() {
    const { formIsOpen } = this.state;
    return formIsOpen ? (
      <form
        className="form_cust"
        name="form"
        method="POST"
        onSubmit={this.handleSubmit}
      >
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
      <button
        type="button"
        className="closed_form"
        onClick={() => this.setState({ formIsOpen: true })}
      />
    );
  }
}
