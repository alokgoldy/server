import React,{useEffect,createContext,useReducer,useContext} from 'react';
import { BrowserRouter, Route,Switch, useHistory } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';

import Home from './components/screens/home';
import Signup from './components/screens/signup';
import Signin from './components/screens/signin';
import Profile from './components/screens/profile';
import CreatePost from './components/screens/createpost';
import {reducer,initialState} from './reducers/userReducer'
export const UserContext = createContext()

const Routing = ()=>{

  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user)
    {
      dispatch({type:"USER",payload:user})
      history.push('/')
    }else{
      history.push('./signin')
    }
  },[])

  return(
    <Switch>
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
    </Switch>
  )
}


function App() {

  const [state,dispatch] = useReducer(reducer,initialState)

  return (

    <UserContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
        <NavBar/>
        <Routing/>
    </BrowserRouter>
    </UserContext.Provider>
    
  );
}

export default App;
