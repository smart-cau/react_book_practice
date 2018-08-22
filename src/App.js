/*
- 'ref'로 scrollbox를 만들고
- 'props'로 parent componet에서 child component로 값을 전달하여 출력하고
- 'state'와 'event handler'로 값을 입력한 것을 alert 메소드로 출력하며,
- '삼항연산자 A ? B : C'와 'ref'로 비밀번호 유효성을 검사하고
- 'map', '전개연산자 ...', '배열 메소드 concat(), slice()', 'onDoubleClick event' 등으로 
  새로운 내용을 추가하고 삭제하는 기능을 구현하였다. 
*/

import React, { Component } from "react";

import ScrollBox from "./componets/ScrollBox";
import Props from "./componets/Props";
import EventHandlingAlert from "./componets/EventHandling_Alert";
import Validate from "./componets/Validate";
import Iteration from "./componets/Iteration";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={ref => (this.ScrollBox = ref)} />
        <Props age="24" />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        <button onClick={() => this.ScrollBox.scrollToTop()}>맨 위로</button>
        <Validate />
        <EventHandlingAlert />
        <Iteration />
      </div>
    );
  }
}

export default App;
