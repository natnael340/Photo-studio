import React, { Component } from "react";

export default class UserForm extends Component {
  render() {
    return (
      <div className="user-edit-form">
        <div className="cover">
          <div className="row">
            <div className="col-full">
              <div className="col-five">&nbsp;</div>
              <div className="col-two">
                <img src="./static/frontend/images/logo.png" width="100%" />
              </div>
              <div className="col-five">&nbsp;</div>
              <div className="col-full">
                <form encType="multipart/form-data" style={{ color: "white" }}>
                  <input
                    type="file"
                    name="image"
                    accept="images/*"
                    id="id_image"
                  />
                  <label>Bio</label>
                  <textarea className="col-five"></textarea>

                  <label className="col-full" style={{ padding: 0 }}>
                    Phone Number
                  </label>
                  <input type="text" className="col-full" />
                  <label className="col-full" style={{ padding: 0 }}>
                    Telegram
                  </label>
                  <input type="text" className="col-full" />
                  <label className="col-full" style={{ padding: 0 }}>
                    Instagram
                  </label>
                  <input type="text" className="col-full" />
                  <label className="col-full" style={{ padding: 0 }}>
                    Email
                  </label>
                  <input type="email" className="col-full" />
                  <div className="col-full align-center">
                    <input type="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
