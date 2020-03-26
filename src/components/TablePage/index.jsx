import React, { Component } from "react";
import "./index.sass";

export default class Table extends Component {
  render() {
    return (
      <>
        <div className="table_cust">
          <div className="table_row top_discr"> Замена ДВС</div>
          <div className="table_row">
            <div className="table_cell_1 bg_cell">
              Замена двигателя (поперечный/продольный мотор){" "}
            </div>
            <div className="table_cell_2 bg_cell">От 8000 р.</div>
          </div>
          <div className="table_row">
            <div className="table_cell_1 bg_cell">
              Замена двигателя (V-образный мотор)
            </div>
            <div className="table_cell_2 bg_cell">От 10 000 р. </div>
          </div>
          <div className="table_row top_discr"> Замена КПП</div>
          <div className="table_row">
            <div className="table_cell_1 bg_cell">Замена КПП (4wd)</div>
            <div className="table_cell_2 bg_cell">От 4500 р.</div>
          </div>
          <div className="table_row">
            <div className="table_cell_1 bg_cell">
              Замена КПП (передний привод){" "}
            </div>
            <div className="table_cell_2 bg_cell">От 4000 р. </div>
          </div>
        </div>
        <div className="table_cust">
          <div className="table_row top_discr"> Замена ДВС</div>
          <div className="table_row">
            <div className="table_cell_1 bg_cell">
              Замена двигателя (передний привод, рядный мотор){" "}
            </div>
            <div className="table_cell_2 bg_cell">От 8000 р.</div>
          </div>
          <div className="table_row">
            <div className="table_cell_1 bg_cell">
              Замена двигателя (V-образный мотор передний привод)
            </div>
            <div className="table_cell_2 bg_cell">От 10 000 р. </div>
          </div>
          <div className="table_row">
            <div className="table_cell_1 bg_cell">
              Замена двигателя (4wd, рядный мотор)
            </div>
            <div className="table_cell_2 bg_cell">От 10 000 р.</div>
          </div>
          <div className="table_row">
            <div className="table_cell_1 bg_cell">
              Замена двигателя (4wd, V-образный мотор)
            </div>
            <div className="table_cell_2 bg_cell">От 12 000 р.</div>
          </div>
          <div className="table_row top_discr"> Замена КПП</div>
          <div className="table_row">
            <div className="table_cell_1 bg_cell">Замена КПП (4wd)</div>
            <div className="table_cell_2 bg_cell">От 6000 р.</div>
          </div>
          <div className="table_row">
            <div className="table_cell_1 bg_cell">
              Замена КПП (передний привод){" "}
            </div>
            <div className="table_cell_2 bg_cell">От 4000 р. </div>
          </div>
        </div>
        <p className="discription_table">Установка происходит на нашем СТО</p>
        <p className="discription_table">Срок замены: 1-2 дня;</p>
        <p className="discription_table">
          В стоймость замены входит демонтаж старого агрегата;
        </p>{" "}
      </>
    );
  }
}
