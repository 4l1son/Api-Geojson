import { Link } from "react-router-dom";
import styles from '/Users/perei/Desktop/PROJETO_REACT/app_react01/src/styles/styles.css';
import { useState } from "react";
import { Home } from "../home/home";
import axios from 'axios';
import { Posts } from "../posts/posts";




const Login = () =>{

  
  
  const[username,setuserName] = useState('')
  const[senha,setSenha] = useState('')
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      if(username === "master" && senha === "master"){
         window.location.href="/posts";
      }
      else{
        alert("Senha ou nome errado , tente novamente")
      }
    }
return (<>
   
    <h1>Informe seus dados de login</h1>
    <div className="center">
      <div className="formulario">
       <form  >
          <input 
            placeholder="Nome" 
            type="text"
            id="username" 
            name="username"
            required
            value={username}
            onChange={(event)=>setuserName(event.target.value)}
             />
          <input 
            placeholder="Senha" 
            type="password"
            id="senha" 
            name="senha"
            value={senha}
            onChange={(event)=>setSenha(event.target.value)}

             />
          
    <div className={"center"}>  
    
      <button onClick={handleSubmit}  type="submit" style={{ 
               backgroundColor: 'black',
               color: 'white',
               border: 'none',
               fontSize:'18px',
               padding: '10px 20px',
               borderRadius: '5px'
        
      }}>Login</button> 
      
      
           </div>
               
        </form>
      </div>
    </div>
  
 
    </>
  );
}

export { Login };