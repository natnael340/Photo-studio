import React, { Component, Fragment } from "react";
import Images from "./images";
import Footer from "./footer";
import Masonry from "react-masonry-component";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPost, deletePost } from "../../actions/post";
import $ from "jquery";
import st from "./index";

const masonaryOptions = {
  itemSelector: ".entry",
  columnWidth: ".grid-sizer",
  percentPosition: true,
  resize: true,
};
const imagesLoadedOptions = { background: ".bricks-wrapper" };

export default class Home extends Component {
  componentDidMount() {
    this.props.headTitle(0);
    st();
  }

  render() {
    return (
      <Fragment>
        <div>
          <br></br>

          <Images view="ALL" type="home" dispacc={this.props.dispacc} />

          
        </div>
        <Footer />
      </Fragment>
    );
  }
}
