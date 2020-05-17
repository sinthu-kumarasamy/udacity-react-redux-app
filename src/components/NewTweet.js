import React, { Component } from "react";
import {connect} from 'react-redux'
import {handleAddTweets} from '../actions/tweets'
import { Redirect } from 'react-router-dom'

class NewTweet extends Component {
  state = {
    text: "",
    toHome: false,
  };

  onChangeHandle = (e) => {
    const {id} = this.props
    const text = e.target.value;
    this.setState({ text,toHome: id ? false : true });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;
    const {dispatch,id} = this.props
    dispatch(handleAddTweets(text,id))
    this.setState({ text: "" });
  };
  render() {
    const { text, toHome } = this.state
    const { textAreaLeft } = 250 - text.length;
    if (toHome === true) {
        return <Redirect to='/' />
    }
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
