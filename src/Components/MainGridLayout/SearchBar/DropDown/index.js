import React from "react";

export default function FilterDropDown() {
  return (
    <>
      <button
        className="btn btn-link text-dark  dropdown-toggle-split"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        type="submit"
      >
        <i className="fas fa-sort-amount-down"></i>
      </button>
      <div className="dropdown-menu" style={{ border: "0" }}>
        <div className="filter-dropdown">
          <div className="card-header">header</div>
          <div className="card-body">
            <form>
              <div
                className="p-2 bg-light rounded rounded-pill shadow-sm mb-4"
                style={{ borderRadius: "2px solid brown" }}
              >
                <div className="input-group">
                  <input
                    type="search"
                    placeholder="Message statuses"
                    aria-describedby="button-addon"
                    className="form-control border-0 bg-light"
                  />
                  <div className="input-group-prepend">
                    <button type="submit" className="btn btn-link text-dark">
                      <i className="fas fa-caret-down"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="p-2 bg-light rounded rounded-pill shadow-sm mb-4"
                style={{ borderRadius: "2px solid brown" }}
              >
                <div className="input-group">
                  <input
                    type="search"
                    placeholder="Time of Message"
                    aria-describedby="button-addon"
                    className="form-control border-0 bg-light"
                  />
                  <div className="input-group-prepend">
                    <button type="submit" className="btn btn-link text-dark">
                      <i className="fas fa-caret-down"></i>
                    </button>
                  </div>
                </div>
              </div>
              <button className="btn btn-warning">Apply Filters</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
