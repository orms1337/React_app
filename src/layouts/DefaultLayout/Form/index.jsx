import React, { Component } from "react";
import InputMask from "react-input-mask";
import "./index.sass";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axiosInstance from "../../../helpers/axios";

export default class Form extends Component {
  state = { name: "", tel: "", visible: false };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async event => {
    const { name, tel } = this.state;
    axiosInstance
      .post(process.env.REACT_APP_BACKEND_URL + "/", {
        name,
        phone: tel.trim()
      })
      .then(response => {
        console.log(response.data);
        toast.success("Ваша заявка отправлена");
      });

    event.preventDefault();
  };

  render() {
    return (
      /*
        <div>
          <Button type="primary" onClick={this.showDrawer}>
            Open
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <span>GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</span>
          </Drawer>
        </div>
        */
      <form
        className="form_cust"
        name="form"
        method="POST"
        onSubmit={this.handleSubmit}
      >
        <fieldset>
          <legend className="cust_legend">Заказать звонок</legend>
          <div>
            <div className="element_form">
              <label>Имя</label>
            </div>
            <div className="element_form">
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div>
            <div className="element_form">
              <label>Телефон</label>
            </div>
            <div className="element_form">
              <InputMask
                mask="+7 999 999 99 99"
                name="tel"
                maskChar=" "
                value={this.state.valueTel}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
        </fieldset>
        <button type="submit" className="button_form">
          Заказать
        </button>
      </form>
    );
  }
}
