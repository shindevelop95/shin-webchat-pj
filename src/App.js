import './App.css';
import React, {useState} from 'react'
import {SideNavContainer} from './containers/SideNavContainer'
import {MainContainer} from './containers/MainContainer'
import {LoginContainer} from './containers/LoginContainer'
import { useStateValue } from './utils/StateProvider';

function App() {
  const [{user},dispatch] = useStateValue();
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
