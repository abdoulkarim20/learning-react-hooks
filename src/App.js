import './App.css';
import React, { useState, useEffect,useRef } from 'react';

function App() {
  const inpupRef=useRef();
  const [name, setName] = useState("Abdoul Karim DIALLO");
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(null);
  const resetCount = () => { setCount(0) }
  const [color, setColor] = useState("#ffffff");
  const handleOnchange = (e) => { setValue(e.target.value) };
  const onIncrement = () => {
    inpupRef.current.value=null;
    setValue(null);
    !!value && setCount(count + parseInt(value))
  }
  const onDecrement = () => {
    inpupRef.current.value=null;
    setValue(null);
    /*controle de flux*/
    !!value && setCount(count - parseInt(value))
  }
  useEffect(() => {
    setColor(count < 0 ? "#ce0033" : "#ffffff")
    // console.log('le changement est', count);
  }, [count])
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>
            Salut {name}
          </p>
          <input onChange={(e) => { setName(e.target.value) }}></input>
        </div>
        <div style={{ color: color }}>
          {count}
          <div>
            <input ref={inpupRef} type="number" onChange={handleOnchange}></input>
          </div>
          <div>
            <button onClick={resetCount}>reset count</button>
          </div>
          <div>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
