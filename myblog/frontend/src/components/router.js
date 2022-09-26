import React, { Component, Fragment } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./posts/header";
import Home from "./posts/home";
import Catagory from "./posts/catagory";
import Contest from "./posts/contest";
import Login from "./posts/login";
import About from "./posts/about";
import $ from "jquery";
import SinglePhoto from "./posts/singlePhoto";
import Register from "./posts/register";
import Account from "./posts/account";
import UserForm from "./posts/UserForm";

export default class router extends Component {
  state = {
    style: {
      display: "none",
    },
    form: {
      display: "none",
    },
    post: {},
  };
  makecurrnet = (id) => {
    for (let i = 0; i < 6; i++) {
      let c = "#nav-lists-" + id;
      let d = "#nav-lists-" + i;
      if ($(d).hasClass("current")) {
        $(d).removeClass("current");
      }
      $(c).addClass("current");
    }
  };
  displayAccount = (stat, pos = {}) => {
    stat == 1
      ? this.setState({ style: { display: "block" } })
      : this.setState({ style: { display: "none" } });
    this.setState({ post: pos });
  };
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route
              exact
              path="/categories/:type"
              render={(props) => (
                <Catagory
                  {...props}
                  headTitle={this.makecurrnet}
                  view="OT"
                  dispacc={this.displayAccount}
                />
              )}
            />
            <Route
              exact
              path="/myaccount/"
              render={(props) => (
                <Account
                  {...props}
                  headTitle={this.makecurrnet}
                  dispacc={this.displayAccount}
                />
              )}
            />
            <Route
              exact
              path="/login/"
              render={(props) => (
                <Login {...props} headTitle={this.makecurrnet} />
              )}
            />
            <Route
              exact
              path="/register/"
              render={(props) => (
                <Register {...props} headTitle={this.makecurrnet} />
              )}
            />
            <Route
              exact
              path="/about/"
              render={(props) => (
                <About {...props} headTitle={this.makecurrnet} />
              )}
            />
            <Route
              exact
              path="/contest/"
              render={(props) => (
                <Contest {...props} headTitle={this.makecurrnet} />
              )}
            />
            <Route
              exact
              path=""
              render={(props) => (
                <Home
                  {...props}
                  headTitle={this.makecurrnet}
                  view="all"
                  dispacc={this.displayAccount}
                />
              )}
            />
          </Switch>
          {this.state.style.display == "block" ? (
            <SinglePhoto dispacc={this.displayAccount} pos={this.state.post} />
          ) : (
            ""
          )}
          {this.state.form.display == "block" ? (
            <UserForm dispacc={this.displayAccount} pos={this.state.form} />
          ) : (
            ""
          )}
        </Fragment>
      </Router>
    );
  }
}
