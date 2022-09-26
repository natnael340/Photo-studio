import React, { Component, Fragment } from "react";
import Footer from "./footer";

export default class about extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <br />
          <div className="row">
            <div className="col-five">&nbsp;</div>
            <div className="col-two about-pro">
              <img src="./static/frontend/images/logox.png" width="100%" />
            </div>
            <div className="col-full align-center ">
              <h1 className="about-name">ETPhotography</h1>
            </div>
            <div className="col-full align-left about-desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                aliquam eros ac diam dictum auctor. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Quisque aliquam eros ac diam dictum
                auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque aliquam eros ac diam dictum auctor. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Quisque aliquam eros ac
                diam dictum auctor. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Quisque aliquam eros ac diam dictum auctor.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                aliquam eros ac diam dictum auctor.
              </p>
            </div>
            <div className="col-four">&nbsp;</div>
            <div className="col-four about-me">
              <div className="col-full pro">
                <img
                  src="./static/frontend/images/logox.png"
                  alt="Website's logo"
                />
              </div>
              <div className="detail">
                <span>Developed by Natnael Tilahun</span>
                <br />
                <span>
                  Experiance in React js, Django, React Native, Larvel, Java,
                  Mongo DB
                </span>
                <br />
                <div className="col-full see-pro align-center">
                  <button>See Projects</button>
                </div>
              </div>
            </div>
            <br />
            <div className="col-five report">
              <h2>Report</h2>
              <input
                type="text"
                placeholder="Your Email"
                className="col-full"
                name="email"
              />
              <textarea
                className="col-full"
                placeholder="Write what you feel about this site"
              />

              <button className="pull-right">Submit</button>
              <br />
              <p className="col-full align-left">
                I'll reply you if you have any question, I will answer you
                through the email you provide
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
