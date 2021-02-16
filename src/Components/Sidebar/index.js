/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { SideBar, SideBarGrid, ListSpan } from "./index.styles";
import "./index.css";

export default function Sidebar() {
  return (
    <SideBarGrid className="col-md-2 mx-auto" style={{ marginTop: "-3px" }}>
      <SideBar className="list-group align-items-center">
        <br />
        <a
          className="list-group-item list-group-item-action dropdown-toggle"
          href="#"
        >
          <i className="far fa-user-circle"></i>
          <ListSpan>Employer Profile</ListSpan>
        </a>
        <a className="list-group-item list-group-item-action" href="#">
          <i className="fas fa-taxi"></i>
          <ListSpan>Onboard Your Vehicles</ListSpan>
        </a>
        <a className="list-group-item list-group-item-action" href="#">
          <i className="fas fa-search"></i>
          <ListSpan>Search and Hire Drivers</ListSpan>
        </a>
        <a
          className="list-group-item list-group-item-action"
          href="#"
          aria-controls="settings"
        >
          <i className="far fa-envelope"></i>
          <ListSpan>Inbox</ListSpan>
        </a>
        <a className="list-group-item list-group-item-action" href="#">
          <i className="fas fa-inbox"></i>
          <ListSpan>Recruitment</ListSpan>
        </a>
        <a className="list-group-item list-group-item-action" href="#">
          <i className="fas fa-network-wired"></i>
          <ListSpan>My Organisations</ListSpan>
        </a>
        <a className="list-group-item list-group-item-action" href="#">
          <i className="fas fa-star"></i>
          <ListSpan>Rate A Driver</ListSpan>
        </a>
        <a className="list-group-item list-group-item-action" href="#">
          <i className="far fa-calendar"></i>
          <ListSpan>My Subscription</ListSpan>
        </a>
        <br />
      </SideBar>
    </SideBarGrid>
  );
}
