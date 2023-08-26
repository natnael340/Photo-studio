import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { postPost } from "../../actions/post";

class Form extends Component {
  state = {
    title: "",
    description: ""
  };
  static propTypes = {
    postPost: PropTypes.func.isRequired
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    const { title, description } = this.state;
    const post = { title, description };
    console.log(post);
    this.props.postPost(post);
  };
  render() {
    const { title, description } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            ></input>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              onChange={this.onChange}
              value={description}
            ></input>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-sm">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { postPost }
)(Form);
