import React, { Component, Fragment } from "react";
import Header from "./header";
import st from "./index";

export default class register extends Component {
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
          <div>
            <form>
              <label>
                <label>Username</label>
                <input type="text" placeholder="abebe" />
                <label>Email</label>
                <input type="text" placeholder="abebe" />
                <label>Password</label>
                <input type="password" placeholder="******" />
                <label>Confirm Password</label>
                <input type="password" placeholder="******" />
                <button type="submit">Register</button>
                <div className="new-reg">
                  <span>Already have an account?</span>&nbsp;
                  <a href="#">Log in</a>
                </div>
              </label>
            </form>
          </div>
        </div>
        <br />
      </Fragment>
    );
  }
}
