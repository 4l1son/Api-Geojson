import react, { useEffect } from 'react';
import{
    BrowserRouter as Router,
    Route,
    Routes,

}from "react-router-dom";

import { Home } from './pages/home/home'
import { Login } from './pages/login/login';
import { Posts } from './pages/posts/posts';
import { View } from './pages/view/view';

function App() {
  
  return (
    <div className='App'>
      <Router>
      <Routes>
      <Route path='/login' element={ <Login />}/>
      <Route path='/posts' element={ <Posts />}/>
      <Route path='/view' element={ <View />} />

      </Routes>
      </Router>
    </div>
    
   );
}



export default App;