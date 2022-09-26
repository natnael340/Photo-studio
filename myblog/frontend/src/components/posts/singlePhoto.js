import React, { Component } from "react";
import Images from "./images";

class singlePhoto extends Component {
  componentDidMount() {
    console.log(this.props.pos);
  }
  render() {
    return (
      <div className="full-overlay">
        <div className="single-img">
          <div className="profile">
            <div
              className="profile-pic"
              style={{
                backgroundImage:
                  "url(./static/frontend/images/ims/IMG_20200602_030627_329.jpg)",
              }}
            ></div>
            <h3>{this.props.pos.get_owner_name}</h3>
          </div>
          <div className="image">
            <img src={this.props.pos.image} />
            <div>
              <span>
                68&nbsp;<i className="fa fa-eye"></i>
              </span>
              <span>
                {this.props.pos.no_likes}&nbsp;<i className="fa fa-heart"></i>
              </span>
            </div>
          </div>
          <div className="like-downl">
            <button className="like-btn">
              <i className="fa fa-heart-o"></i>
            </button>
            <button className="download-btn">
              <i className="fa fa-download"></i>
            </button>
          </div>
          <div className="user-post">
            <h3>Posts</h3>
            <hr></hr>
            <Images
              view="ALL"
              dispacc={this.props.dispacc}
              user={this.props.pos.get_owner_name}
            />
          </div>
        </div>
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => this.props.dispacc(0)}
        ></i>
      </div>
    );
  }
}

export default singlePhoto;
