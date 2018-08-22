import React, { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    // 책 121p 참고.
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  scrollToTop = () => {
    this.box.scrollTop = 0;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "60vh",
      width: "70%",
      overflow: "auto" // -> scroll bar가 생기게 해주는 속성.
      // position: "absolute"
      // left: "50%",
      // top: "50%",
      // transform: "translate(-50%, -50%)"
    };

    const innerStyle = {
      width: "100%",
      height: "100vh"
    };

    // 아직 ref에 대한 이해 부족.
    return (
      <div
        style={style}
        ref={ref => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
