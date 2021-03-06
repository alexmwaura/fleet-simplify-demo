import React from "react";
import { SearchGrid } from "./index.styles";
import "./index.css";
import DropDown from "./DropDown/index";

export default function SearchBar() {
  return (
    <div className="container">
      <div className="row">
        <SearchGrid className="col-md-8 col-md-8 mx-auto">
          <ul className="list-inline">
            <li className="list-inline-item">
              <form>
                <div
                  className="p-1 bg-light rounded rounded-pill shadow-sm mb-4"
                  style={{
                    borderRadius: "2px solid yellow",
                    width: "328px",
                  }}
                >
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <button
                        type="submit"
                        id="button-addon"
                        className="btn btn-link text-dark"
                      >
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                    <input
                      type="search"
                      placeholder="Search user messages or chat id's"
                      aria-describedby="button-addon"
                      className="form-control border-0 bg-light"
                    />
                  </div>
                </div>
              </form>
            </li>
            &nbsp;
            <li className="list-inline-item">
              <DropDown />
            </li>
          </ul>
        </SearchGrid>
        <SearchGrid className="col-md-4 float-sm-right">
          <div className="float-sm-right" style={{marginRight: '3rem'}}>
            <button className="btn btn-warning">
              <i className="fas fa-plus"></i>&nbsp;&nbsp; Start a new chat
            </button>
          </div>
        </SearchGrid>
      </div>
    </div>
  );
}
