import * as React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style.css';

const App = () => {
  //기본적으로 캘린더가 선택할 수 있게 넣어줄 value이다.
  //value 값만 표시하게 할 게 아니라면 나중에 수정해주거나 지워주자.
  const [value, onChange] = useState(new Date());
  return <Calendar onChange={onChange} value={value} />;
};

export default App;
