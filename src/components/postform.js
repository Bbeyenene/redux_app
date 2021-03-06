import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../redux/action/index";

class postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
    };
    //call to acttion
    this.props.createPost(post);
  };

  render() {
    return (
      <div>
        <h1>post form</h1>
        <form onSubmit={this.onSubmit}>
          <label>Title</label> <br />
          <input
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.state.title}
          />
          <br />
          <br />
          <label>Body</label>
          <br />
          <textarea
            name="body"
            onChange={this.onChange}
            value={this.state.body}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

postform.propTypes = {
  createPost: propTypes.func.isRequired,
};

export default connect(null, { createPost })(postform);
