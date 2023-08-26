import React, { Component } from "react";
import { Link } from "react-router-dom";
import st from "./index";

export default class header extends Component {
  state = {
    no: 0,
  };
  refresh = () => {
    if (!(this.state.no > 0)) {
      window.location.reload();
      this.setState({ no: this.state.no + 1 });
    }
  };
  changeloc = () => {
    window.location.href = "#/";
    window.location.reload;
  };
  render() {
    return (
      <header className="short-header">
        <div className="gradient-block"></div>

        <div className="row header-content">
          <div className="logo">
            <a href="#">Author</a>
          </div>

          <nav id="main-nav-wrap">
            <ul className="main-navigation sf-menu">
              <li className="current nav-lists" id="nav-lists-0">
                <Link to="/">Home</Link>
              </li>
              <li className="has-children nav-lists" id="nav-lists-1">
                <Link to="/categories/all/">Categories</Link>
                <ul className="slideup">
                  <li>
                    <Link to="/categories/LN/">Landscape & Nature</Link>
                  </li>
                  <li>
                    <Link to="/categories/AM/">Arial & Macro</Link>
                  </li>
                  <li>
                    <Link to="/categories/PO/">Potrait</Link>
                  </li>
                  <li>
                    <Link to="/categories/AR/">Arhitectural</Link>
                  </li>
                  <li>
                    <Link to="/categories/FB/">Fashion & Beauty</Link>
                  </li>
                  <li>
                    <Link to="/categories/OT/">Others</Link>
                  </li>
                </ul>
              </li>
              <li className="has-children nav-lists" id="nav-lists-2">
                <a href="#" title="">
                  Account
                </a>
                <ul className="slideup">
                  <li>
                    <Link to="/login/">Login</Link>
                  </li>
                  <li>
                    <Link to="/register/">Register</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-lists" id="nav-lists-3">
                <a href="#" title="">
                  Contest
                </a>
              </li>
              <li className="nav-lists" id="nav-lists-4">
                <a href="#" title="">
                  About
                </a>
              </li>
            </ul>
          </nav>

          <div className="search-wrap">
            <form role="search" method="get" className="search-form" action="#">
              <label>
                <span className="hide-content">Search for:</span>
                <input
                  type="search"
                  className="search-field"
                  placeholder="Type The User Name"
                  name="s"
                  title="Search for:"
                  autoComplete="off"
                />
              </label>
              <input type="submit" className="search-submit" />
            </form>

            <span id="close-search" className="close-btn">
              Close
            </span>
          </div>

          <div className="triggers">
            <span className="search-trigger" onClick={st}>
              <i className="fa fa-search"></i>
            </span>
            <a className="menu-toggle" href="#">
              <span>Menu</span>
            </a>
          </div>
        </div>
      </header>
    );
  }
}
