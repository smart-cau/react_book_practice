import React, { Component } from "react";
import "./css/Validate.css";

class Validate extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false
  };

  handleChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password.length > 6
    });
    this.input.focus();
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleButtonClick();
    }
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
          ref={ref => (this.input = ref)}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default Validate;
