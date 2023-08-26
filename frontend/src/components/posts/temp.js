import React, { Component } from "react";
import Masonary from "react-masonry-component";
import $ from "jquery";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import st from "./index";

const masonaryOptions = {
  itemSelector: ".entry",
  columnWidth: ".grid-sizer",
  percentPosition: true,
  resize: true,
};

const imagesLoadedOptions = { background: ".bricks-wrapper" };
export default class temp extends Component {
  componentDidMount() {
    st();
  }

  state = {
    element: [
      "./static/frontend/images/ims/IMG_20200602_030627_329.jpg",
      "./static/frontend/images/ims/IMG_20200602_030520_683.jpg",
      "./static/frontend/images/ims/IMG_20200602_105946_927.jpg",
      "./static/frontend/images/ims/IMG_20200602_030129_143.jpg",
      "./static/frontend/images/ims/IMG_20200602_105950_690.jpg",
      "./static/frontend/images/ims/IMG_20200602_110909_901.jpg",
    ],
  };
  render() {
    return <div></div>;
  }
}
