import React, { Component } from "react";
import "./index.sass";

export default class Table extends Component {
  render() {
    return (
      <>
        <div className="table">
          <span className="table_title">Замена ДВС</span>
          <div className="table_item">
            <span className="table_item_text">
              Замена двигателя (поперечный/продольный мотор)
            </span>
            <span className="table_item_text right">От 8000 р.</span>
          </div>
          <div className="table_item">
            <span className="table_item_text">
              Замена двигателя (V-образный мотор)
            </span>
            <span className="table_item_text right">От 10 000 р.</span>
          </div>
          <span className="table_title">Замена КПП</span>
          <div className="table_item">
            <span className="table_item_text">Замена КПП (4wd)</span>
            <span className="table_item_text right">От 4500 р.</span>
          </div>
          <div className="table_item">
            <span className="table_item_text">
              Замена КПП (передний привод)
            </span>
            <span className="table_item_text right">От 4000 р.</span>
          </div>
        </div>

        <div className="table">
          <span className="table_title">Замена ДВС</span>
          <div className="table_item">
            <span className="table_item_text">
              Замена двигателя (поперечный/продольный мотор)
            </span>
            <span className="table_item_text right">От 8000 р.</span>
          </div>
          <div className="table_item">
            <span className="table_item_text">
              Замена двигателя (V-образный мотор)
            </span>
            <span className="table_item_text right">От 10 000 р.</span>
          </div>
          <span className="table_title">Замена КПП</span>
          <div className="table_item">
            <span className="table_item_text">Замена КПП (4wd)</span>
            <span className="table_item_text right">От 4500 р.</span>
          </div>
          <div className="table_item">
            <span className="table_item_text">
              Замена КПП (передний привод)
            </span>
            <span className="table_item_text right">От 4000 р.</span>
          </div>
        </div>
      </>
    );
  }
}
