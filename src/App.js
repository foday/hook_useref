import './App.css';
import React, {useState, useRef, useEffect} from 'react';

function App() {
  const [name, setName] = useState("sim");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1 
  })

  return (
    <div className="App">
      <input value={name} onChange={e => setName(e.target.value)} ></input>
      <div>My Name is {name}</div>
      <div>rendered: {renderCount.current} times</div>
    </div>
  );
}

export default App;
