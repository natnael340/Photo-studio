import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPost, deletePost } from "../../actions/post";
import Masonry from "react-masonry-component";
import st from "./index";
import SingleImage from "./singlePhoto";
import $ from "jquery";
import { renderToString } from "react-dom/server";

const masonaryOptions = {
  itemSelector: ".entry",
  columnWidth: ".grid-sizer",
  percentPosition: true,
  resize: true,
};
const imagesLoadedOptions = { background: ".bricks-wrapper" };

class Images extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    info: PropTypes.object.isRequired,
  };
  state = {
    optionImg: {
      PP: "Profile Picture",
      UP: "Post",
    },
    optionCa: {
      LN: "Landscape & Nature",
      AM: "Arial & Macro",
      PO: "Portrait",
      AR: "Arhitectural",
      FB: "Fashion & Beauty",
      OT: "Others",
    },
  };
  pageSelect = (page) => {
    this.props.getPost(page);
    const pa = document.getElementsByClassName("page-numbers");
    for (let k = 1; k < pa.length; k++) {
      pa[k].classList.remove("currentPage");
    }
    pa[page].classList.add("currentPage");
  };
  pages = [];
  componentDidMount() {
    this.props.getPost();
    st();
  }
  checkstat = (pos) => {
    if (this.props.view == "ALL") {
      if (this.props.user) {
        if (pos.get_owner_name == this.props.user) {
          return true;
        }
        return false;
      }
      return true;
    } else {
      if (pos.catagory == this.props.view) return true;
      return false;
    }
  };
  render() {
    let c = Math.floor(this.props.info.count / 10);
    for (let i = 0; i <= c; i++) {
      this.pages[i] = i + 1;
    }
    return (
      <div className="row masonry">
        <Masonry
          className={"bricks-wrapper"}
          elementType={"div"}
          option={masonaryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
          imagesLoadedOptions={imagesLoadedOptions}
        >
          <div className="grid-sizer"></div>
          <div
            className="brick entry featured-grid animate-this"
            style={this.props.type ? { display: "block" } : { display: "none" }}
          >
            <div className="entry-content">
              <div className="post-img">
                <img src="./static/frontend/images/postsmall.jpg" />
                <div className="overlay"></div>
              </div>
            </div>
          </div>

          {this.props.posts
            .filter((pos) => this.checkstat(pos))
            .map((post) => (
              <article
                key={post.id}
                className="brick entry format-standard animate-this"
              >
                <div className="entry-thumb">
                  <span
                    className="thumb-link"
                    onClick={() => this.props.dispacc(1, post)}
                  >
                    <img src={post.image} alt="building" />
                  </span>
                </div>
                <div className="entry-text">
                  <div className="entry-header">
                    <div className="entry-meta">
                      <span className="cat-links">
                        <span>By: </span>
                        <a href="#">{post.get_owner_name}</a>
                        <span className="like-ico">
                          <i className="fa fa-heart" aria-hidden="true"></i>{" "}
                          {post.no_likes}
                        </span>
                      </span>
                    </div>

                    <div className="like-fav">
                      <div className="fav">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
        </Masonry>
        <div className="row">
          <nav className="pagination">
            <span
              className="page-numbers prev"
              onClick={() =>
                this.pageSelect(
                  parseInt($(".currentPage")[0].innerHTML) == 1
                    ? 1
                    : parseInt($(".currentPage")[0].innerHTML) - 1
                )
              }
            >
              Prev
            </span>
            {this.pages.map((p) => (
              <a
                key={p}
                id={"page-number-" + p}
                onClick={() => this.pageSelect(p)}
                className={p == 1 ? "page-numbers currentPage" : "page-numbers"}
              >
                {p}
              </a>
            ))}

            <a
              onClick={() =>
                this.pageSelect(
                  this.pages.length >= parseInt($(".currentPage")[0].innerHTML)
                    ? this.pages.length
                    : parseInt($(".currentPage")[0].innerHTML) + 1
                )
              }
              className="page-numbers next"
            >
              Next
            </a>
          </nav>
        </div>
      </div>
    );
  }
}
const mapStatToProps = (state) => ({
  posts: state.post.posts,
  info: state.post.info,
});
export default connect(mapStatToProps, { getPost })(Images);
