import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';

import Home from './components/screens/home';
import Signup from './components/screens/signup';
import Signin from './components/screens/signin';
import Profile from './components/screens/profile';
import CreatePost from './components/screens/createpost';




function App() {
  return (
    <BrowserRouter>
      <NavBar/>

      <Route path="/signup">
        <Signup/>
      </Route>

      <Route path="/signin">
        <Signin/>
      </Route>

      <Route path="/profile">
        <Profile/>
      </Route>

      <Route exact path="/">
        <Home/>
      </Route>
      
      <Route exact path="/create">
        <CreatePost/>
      </Route>

    </BrowserRouter>
    
  );
}

export default App;
