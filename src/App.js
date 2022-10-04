import './App.css';
import React, { useState, useEffect, useRef, useReducer } from 'react';
const initialState = {
  count: 0,
  intValue: null
}
function reducer(state, action) {
  switch (action.type) {
    case "change": {

    }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inpupRef = useRef();
  const [name, setName] = useState("Abdoul Karim DIALLO");
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(null);
  const resetCount = () => { setCount(0) }
  const [color, setColor] = useState("#ffffff");
  const handleOnchange = (e) => { setValue(e.target.value) };
  const onIncrement = () => {
    inpupRef.current.value = null;
    setValue(null);
    !!value && setCount(count + parseInt(value))
  }
  const onDecrement = () => {
    inpupRef.current.value = null;
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
          <input className='my-3' onChange={(e) => { setName(e.target.value) }}></input>
        </div>
        <div style={{ color: color }}>
          {count}
          <div className='my-3'>
            <input ref={inpupRef} type="number" onChange={handleOnchange}></input>
          </div>
          <div>
            <button className='mt-5 btn btn-danger' onClick={resetCount}>Effacer</button>
          </div>
          <div className='mt-5'>
            <button className='btn btn-danger mx-2' onClick={onDecrement}>Decrementer</button>
            <button className='btn btn-success mx-2' onClick={onIncrement}>Incrementer</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
