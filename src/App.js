import './App.css';
import React, {useState} from 'react'
import {SideNavContainer} from './containers/SideNavContainer'
import {MainContainer} from './containers/MainContainer'
import {LoginContainer} from './containers/LoginContainer'

function App() {
  const [user,setUser] = useState(null);
  return (
    <div className="App">
    {!user?(
      <LoginContainer/>
      ):( 

      <MainContainer/>
      )}
    
    </div>
  );
}

export default App;
