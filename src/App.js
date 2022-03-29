import './App.css';
import React, {useState, useRef, useEffect} from 'react';

function App() {
  const [name, setName] = useState("foday");
  // const renderCount = useRef(0);
  const inputRef = useRef();
  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1 
  // })
  function focus() {
    inputRef.current.focus()
  }

  return (
    <div className="App">
      {/* <input value={name} onChange={e => setName(e.target.value)} ></input> */}
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} ></input>
      <div>My Name is {name}</div>
      <button onClick={focus}>Focus</button>
      {/* <div>rendered: {renderCount.current} times</div> */}
    </div>
  );
}

export default App;
