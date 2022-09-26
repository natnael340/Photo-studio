import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../store";
import Posts from "./posts/post";
import Form from "./posts/form";
import Header from "./posts/header";
import Home from "./posts/home";
import Catagory from "./posts/catagory";
import Footer from "./posts/footer";
import Post from "./router";
import $ from "jquery";
import st from "./posts/index";
import SingleImage from "./posts/singlePhoto";
import Login from "./posts/login";
import Register from "./posts/register";

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

class HelloWorld extends Component {
  state = {
    person: {},
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Switch>
              <Route exact path="" component={Post} />
            </Switch>
            <div id="preloader">
              <div id="loader"></div>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}
ReactDOM.render(<HelloWorld />, document.getElementById("app"));
