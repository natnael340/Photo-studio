import React, { Component, Fragment } from "react";
import Header from "./header";
import st from "./index";

export default class login extends Component {
  componentDidMount() {
    st();
    this.props.headTitle(2);
  }
  render() {
    return (
      <Fragment>
        <div className="sign-block">
          <div className="img">
            <img
              src="./static/frontend/images/logox.png"
              alt="Website's logo"
            />
          </div>
          <div className="error">error occured</div>
          <div>
            <form>
              <label>Username or Email</label>
              <input type="text" placeholder="abebe" />

              <label>Password</label>
              <input type="password" placeholder="******" />
              <span className="show-p fa fa-eye"></span>
              <div className="forget-p-block">
                <a href="#" className="forget-p">
                  Forget password?
                </a>
              </div>
              <button type="submit">Sign In</button>
              <div className="new-reg">
                <span>Not registerd yet?</span>&nbsp;
                <a href="#">Register</a>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
