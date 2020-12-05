import React from "react";
import { SearchGrid } from "./index.styles";
import "./index.css";
import DropDown from "./DropDown/index"

export default function SearchBar() {
  return (
    <div className="container">
      <div className="row">
        <SearchGrid className="col-md-4 col-md-4 mx-auto">
          <ul className="list-inline">
            <li className="list-inline-item">
              <form>
                <div
                  className="p-1 bg-light rounded rounded-pill shadow-sm mb-4"
                  style={{ borderRadius: "2px solid yellow" }}
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
            &nbsp;&nbsp;&nbsp;
            <li className="list-inline-item">
            <DropDown/>
            </li>
          </ul>
        </SearchGrid>
        <SearchGrid className="col-md-8 float-sm-right">
          <div className="float-sm-right">
            <button className="btn btn-warning">
              <i className="fas fa-plus"></i>Start a new chat
            </button>
          </div>
        </SearchGrid>
      </div>
    </div>
  );
}
