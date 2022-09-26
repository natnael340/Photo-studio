import React, { Component, Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import $ from "jquery";
import Images from "./images";

export default class account extends Component {
  componentDidMount() {
    this.props.headTitle(2);
  }
  render() {
    return (
      <Fragment>
        <div className="myacc">
          <div
            className="pro-pic"
            style={{
              backgroundImage:
                "url('./static/frontend/images/ims/IMG_20200602_030627_329.jpg')",
            }}
          ></div>
          <div className="username">
            <a>Malik</a>
          </div>
          <div className="bio">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              aliquam eros ac diam dictum auctor.
            </span>
          </div>
          <div className="contacts">
            <span className="fa fa-phone">
              <span>&nbsp;&nbsp;+251 926 600 549</span>
            </span>
            <span className="fa fa-phone">
              <span>&nbsp;&nbsp;+251 926 600 549</span>
            </span>
            <span className="fa fa-phone">
              <span>&nbsp;&nbsp;+251 </span>
            </span>
            <span className="fa fa-phone">
              <span>&nbsp;&nbsp;+251 926 600 549</span>
            </span>
          </div>
          <div className="edit">
            <button>Edit</button>
          </div>
        </div>
        <div>
          <div className="user-postss">
            <div className="header">
              <h3>Posts</h3>
              <h3>Likes</h3>
              <span>Upload Photo</span>
            </div>
            <hr></hr>
            <Images view="ALL" dispacc={this.props.dispacc} />
          </div>
        </div>

        <Footer />
      </Fragment>
    );
  }
}
