import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState("Abdoul Karim DIALLO");
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#ffffff");
  useEffect(() => {
    setColor(count < 0 ? "#ce0033" : "#ffffff")
    console.log('le changement est', count);
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
        <div style={{ color:color  }}>
          <p>Vous avez cliquer {count} fois</p>
          <button onClick={() => { setCount(count - 1) }}>-</button>
          <button onClick={() => { setCount(count + 1) }}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
