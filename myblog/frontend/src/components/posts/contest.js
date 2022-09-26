import React, { Component } from "react";

export default class contest extends Component {
  render() {
    return (
      <div className="row contests">
        <div className="col-two mob-full">&nbsp;</div>
        <div className="col-six mob-full">
          <br />
          <div className="contest">
            <p className="info align-center">
              The Winner Of This Contest Will Be Rewarded With 50 Birr Card.
              Only One Winner Will Be Awarded With The Prize. So Try To Post
              Your Best Photo.
            </p>
            <div className="post">
              <ul>
                <li>
                  <div className="pro">
                    <div
                      className="photo"
                      style={{
                        backgroundImage:
                          "url('./static/frontend/images/logox.png')",
                      }}
                    ></div>
                    <a href="#">Malik</a>
                  </div>
                  <br />
                  <div className="elt">
                    <div
                      className="photo"
                      style={{
                        backgroundImage:
                          "url('./static/frontend/images/post.jpg')",
                      }}
                    ></div>
                    <span className="fa fa-heart">&nbsp;5</span>
                    <button className="fa fa-heart-o col-full"></button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-four mob-full">
          <div className="col-full mob-full align-right">
            <button className="align-right pull-right">Upload</button>
            <div className="col-full">&nbsp;</div>
            <div className="col-full top-list">
              <h3>Top List</h3>
              <hr></hr>
              <ol>
                <li>
                  <a href="#">Malik</a>
                </li>
                <li>
                  <a href="#">Malik</a>
                </li>
                <li>
                  <a href="#">Malik</a>
                </li>
                <li>
                  <a href="#">Malik</a>
                </li>
                <li>
                  <a href="#">Malik</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
