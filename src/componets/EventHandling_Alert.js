import React, { Component } from "react";

class EventHandling_Alert extends Component {
  state = {
    username: "",
    message: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleButton = () => {
    alert(this.state.username + ":" + this.state.message);
    this.setState({
      username: "",
      message: ""
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") this.handleButton();
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="message"
          name="message"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleButton}>제출하기</button>
      </div>
    );
  }
}

export default EventHandling_Alert;
