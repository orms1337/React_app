import React, { Component } from "react";
import YandexMap from "../../layouts/Map";
import "./index.sass";

export default class About extends Component {
  render() {
    return (
      <div>
        <YandexMap />
        <div className="content">
          <div className="content_item">
            <span className="content_item_title">Телефон</span>
            <span className="content_item_text">Телефон: 48-78-77</span>
            <span className="content_item_text">
              Адрес: Нефтезаводская, д.49б
            </span>
          </div>
          <div className="content_item">
            <span className="content_item_title">Режим работы</span>
          </div>
          <div className="content_item">
            <span className="content_item_title">Реквизиты</span>
            <span className="content_item_text">Директор: Сальник С.А.</span>
            <span className="content_item_text">ОРГН: 120550023882</span>
            <span className="content_item_text">
              Юридический адрес: 644040, Омская обл, г.Омск, пр-кт Губкина, д.9,
              пом. 65Б
            </span>
          </div>
        </div>
      </div>
    );
  }
}
