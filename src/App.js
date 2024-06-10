import './App.css';
import Formulario from './formulario.jsx'
import Listado from './listado.jsx'
import React, { useState } from 'react';
function App() {
  const [citas,setCitas] = useState ([]);
  return (
    <div className="App">
      <header className="App-header">
        <Formulario setCitas={setCitas}> </Formulario>
        <Listado citas={citas} setCitas={setCitas}></Listado>
      </header>
    </div>
  );
}

export default App;
