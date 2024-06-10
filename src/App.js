import './App.css';
import React, { useState, useEffect } from 'react';
import TomarCitas from './view/TomarCitas';

function App() {
  
  const [users, setUsers] = useState([]);
  const paginaApi="https://randomuser.me/api/?results=5";

    useEffect(() => {
        fetch(paginaApi)//busca la pagina
            .then(response => response.json())//hace esto y despues lo siguiente. si falla da catch error
            .then(data => setUsers(data.results))//define el estado de los usuarios
            .catch(error => console.log(error))
    }, [])
  return (
    <>
      <TomarCitas users={users}/>
    </>
  );
}

export default App;
