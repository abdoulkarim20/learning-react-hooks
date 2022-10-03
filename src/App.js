import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("Abdoul Karim DIALLO");
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Salut {name}
        </p>
        <input onChange={(e)=>{setName(e.target.value)}}></input>
      </header>
    </div>
  );
}

export default App;
