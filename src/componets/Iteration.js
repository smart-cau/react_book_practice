import React, { Component } from "react";

class Iteration extends Component {
  state = {
    names: ["정현우", "허익선", "신희창", "백인성", "이하현"],
    new_name: ""
  };

  handleChange = e => {
    this.setState({
      new_name: e.target.value
    });
  };

  handleInsert = () => {
    this.setState({
      // 정보의 추가 = 배열에 새로운 element를 추가
      names: this.state.names.concat(this.state.new_name),
      new_name: ""
    });
  };

  handleRemove = index => {
    const { names } = this.state;
    this.setState({
      names: [...names.slice(0, index), ...names.slice(index + 1, names.length)]
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") this.handleInsert();
  };

  render() {
    // map에 대한 정보 암기! + 추가로 알아보기.
    const nameList = this.state.names.map((new_name, index) => (
      <li key={index} onDoubleClick={() => this.handleRemove(index)}>
        {new_name}
      </li>
      // arrow function에 중괄호{}가 없어야 바로 return 함! 중요!! 여기서 해맸다.
    ));
    return (
      <div>
        <input
          type="text"
          placeholder="new name"
          value={this.state.new_name}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleInsert}>이름추가</button>
        <ul>{nameList}</ul>
      </div>
    );
  }
}

export default Iteration;
