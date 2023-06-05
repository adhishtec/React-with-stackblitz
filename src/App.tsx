import * as React from 'react';
import './style.css';

export default function App() {
  function changeText(val) {
    console.log(val.value);
  }

  return (
    <div>
      <input onChange={(event) => changeText(event)} />
      {}
      <button>Ok++</button>
    </div>
  );
}
