import * as React from 'react';
import './style.css';
import myChild from './childcompo';

export default function App() {
  const [getTextValue, setTextValue] = React.useState(0);

  const [incValue, setIncValue] = React.useState(0);

  function changeText(val) {
    console.log(val.target.value);
    setTextValue(squire(val.target.value));
    console.log('Value Chanbge ❤️');
  }

  function squire(val) {
    console.log('Value Chanbge ❤️');
    return Math.pow(val, 2);
  }

  return (
    <div>
      <input onChange={(event) => changeText(event)} />
      {getTextValue + '❤️'}
      <button onClick={() => setIncValue(incValue + 1)}>Ok++</button>
      {incValue}
    </div>
  );
}
