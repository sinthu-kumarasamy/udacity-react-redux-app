import React, { Component } from "react";
import {connect} from 'react-redux'
import {handleAddTweets} from '../actions/tweets'

class NewTweet extends Component {
  state = {
    text: "",
  };

  onChangeHandle = (e) => {
    const text = e.target.value;
    this.setState({ text });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;
    const {dispatch,id} = this.props
    dispatch(handleAddTweets(text,id))
    this.setState({ text: "" });
  };
  render() {
    const { text } = this.state;
    const { textAreaLeft } = 250 - text.length;
    return (
      <div>
        <h3 className="center">Add New Tweet</h3>
        <form className='new-tweet'onSubmit={this.handleSubmit}>
          <textarea
            placeholder="Type Tweet"
            value={text}
            maxLength={280}
            onChange={this.onChangeHandle}
            className="textarea"
          />
          {textAreaLeft <= 100 && (
            <div className="tweet-length">{textAreaLeft}</div>
          )}
          <button className="btn" type="submit" disabled={text === ""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewTweet)
