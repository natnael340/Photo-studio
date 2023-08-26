import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPost, deletePost } from "../../actions/post";

class Posts extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    getPost: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.getPost();
  }
  render() {
    return (
      <div className="container">
        <div className="grid">
          <div className="img-container">
            <img src="" />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  posts: state.post.posts
});

export default connect(
  mapStateToProps,
  { getPost, deletePost }
)(Posts);
