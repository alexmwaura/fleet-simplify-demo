import React from "react";
import MessageStatus from "./MessageStatus";
import Popover from "@material-ui/core/Popover";
import TimeOfMessage from "./TimeOfMessage";
import "./index.css";

export default function FilterDropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <button
        className="btn btn-link text-dark"
        type="submit"
        onClick={handleClick}
      >
        <i className="fas fa-sort-amount-down"></i>
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="card-header">Filters</div>
        <div className="card-body">
          <form>
            <MessageStatus />
            <TimeOfMessage />
            <button className="btn btn-warning">Apply Filters</button>
          </form>
        </div>
      </Popover>
    </>
  );
}
