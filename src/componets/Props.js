import React, { Component } from "react";
import PropTypes from "prop-types";

class Props extends Component {
  static defaultProps = {
    name: "default 값임"
  };

  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
  };

  render() {
    return (
      <div>
        <p>안녕하세요 제 이름은 {this.props.name} 입니다.</p>
        <p>제 나이는 {this.props.age} 입니다.</p>
      </div>
    );
  }
}

export default Props;
