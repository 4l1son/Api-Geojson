import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () =>{

return (<>

    <h2>Home-visualização</h2>
    
       <button>  <Link to="/posts">Mostre</Link></button>
      
       <button>  <Link to="/posts">Cadastrar</Link></button>
    
    </>
  );
}

export { Home };