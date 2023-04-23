import React from 'react';
import { Link } from 'react-router-dom';

const Posts = () =>{

return (<>
   
<h1 > Adicione um poligono  </h1>

      <form id="store-form" class="mb-4">
        <div class="form-group">
          <input type="text" id="store-id" class="form-control" placeholder='Informe se poligono ou linha' />
        </div>
        <div class="form-group">
        
          <input type="text" id="store-address" class="form-control" placeholder='Adicione a coordenada'/>
        </div>
        <div className={"center"}>  
        <button type="submit" class="btn btn-primary">Submit</button>
    
        </div>
        
      </form>
      <div className={"center"}>  

      <Link to="/view" >Visualizar</Link>
      </div>
  
  
    </>
  );
}

export { Posts };