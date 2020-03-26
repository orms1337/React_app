import React, { Component } from "react";
import InputMask from "react-input-mask";
import "./index.sass";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeTel = this.handleChangeTel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = { valueName: "", valueTel: "" };
  handleChangeName(event) {
    this.setState({ valueName: event.target.value });
  }
  handleChangeTel(event) {
    this.setState({ valueTel: event.target.value });
  }

  handleSubmit(event) {
    alert("Имя: " + this.state.valueName + " Телефон: " + this.state.valueTel);
    event.preventDefault();
  }

  render() {
    return (
      <form
        className="form_cust"
        name="form"
        method="POST"
        onSubmit={this.handleSubmit}
      >
        {console.log(this.state.valueName)}
        <fieldset>
          <legend className="cust_legend">Заказать звонок</legend>
          <div>
            <div className="element_form">
              <label>Имя</label>
            </div>
            <div className="element_form">
              <input
                type="text"
                value={this.state.valueName}
                onChange={this.handleChangeName}
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
                maskChar=" "
                value={this.state.valueTel}
                onChange={this.handleChangeTel}
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
