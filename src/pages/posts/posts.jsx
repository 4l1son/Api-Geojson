import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../view/data.json'
import styles from '../styles/styles.css';

const Posts = () =>{
  const [jsonData, setJsonData] = useState([data]);
  const [showData, setShowdata] = useState(false);
  useEffect(() => {
    setJsonData(data);
  }, []);

  const handleMostrarDados = () => {
    console.log(jsonData);
    setShowdata(!showData);


  };


return (<>
 
<h1 > Adicione um poligono  </h1>
<div className='formulario'> 
      
      <div className={"center"}>  
      <h2 > Mapas cadastrados - GET  </h2>

      {showData && <pre>{JSON.stringify(data, null, 2)}</pre>}
      <button onClick={handleMostrarDados}  style={{ 
               backgroundColor: 'black',
               color: 'white',
               border: 'none',
               fontSize:'18px',
               padding: '10px 20px',
               borderRadius: '5px'
        
      }}>{showData ? 'Limpar dados' : 'Mostrar dados'}</button>
     
      </div>
     
      <div className={"center"}>  

     <h2>Visualizar dados </h2>
     <Link to="/view" ><button  style={{ 
               backgroundColor: 'black',
               color: 'white',
               border: 'none',
               fontSize:'18px',
               padding: '10px 20px',
               borderRadius: '5px'
        
      }}>Visualizar</button></Link>
     </div>

    <div className={"center"}>  

     <h1>Acesse a area de cadastros </h1>
     <Link to="/cadastro" ><button  style={{ 
               backgroundColor: 'black',
               color: 'white',
               border: 'none',
               fontSize:'18px',
               padding: '10px 20px',
               borderRadius: '5px'
        
      }}>Cadastro</button></Link>
     
     </div>
    
  </div>
  </>
  );
}

export { Posts };