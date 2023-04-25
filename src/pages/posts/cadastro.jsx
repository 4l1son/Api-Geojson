import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/styles.css'
function Cadastro() {
  const [name, setName] = useState('');
  const [area, setArea] = useState(0);
  const [vertices, setVertices] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/cadastro', {
        name,
        area,
        vertices,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={"formulario"}>
    <div className={"center"}>  

      <label htmlFor="name">Coordenada</label>
    </div>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
<div className={"center"}>  

      <label htmlFor="area">Area</label>
</div>
      <input
        type="number"
        id="area"
        value={area}
        onChange={(e) => setArea(e.target.value)}
      />
<div className={"center"}>  

      <label htmlFor="vertices">Vertices</label>
</div>
      <input
        type="number"
        id="vertices"
        value={vertices}
        onChange={(e) => setVertices(e.target.value)}
      />
<div className={"center"}>  

      <button type="submit" style={{ 
               backgroundColor: 'black',
               color: 'white',
               border: 'none',
               fontSize:'18px',
               padding: '10px 20px',
               borderRadius: '5px'
      }}>Create</button>
</div>
    </form>
  );
}

export { Cadastro };
