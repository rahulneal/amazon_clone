
import './App.css';
import "./Header"
import Header from './Header';
import Home from "./Home"
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from "./Login"
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {
  const[{},dispatch]=useStateValue();
  
  useEffect(()=>{
    //will only runs once when the app component loads

    auth.onAuthStateChanged(authUser =>{
      console.log('The User is >>>',authUser);
      if (authUser) {
        //the user just logged in / the user was logged in

        dispatch({
          type:'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out

        dispatch({
          type:'SET_USER',
          user: null
          
        })
      }
    })
  },[])
  
  
  return (
    <BrowserRouter>
     <div className="app">
    <Switch>
      <Route path="/login">
        
        <Login/>

      </Route>
    <Route path="/checkout">
      <Header/>
      <Checkout/>
    </Route>


    <Route path="/">
      <Header/>
      <Home/>
    </Route>
      
    </Switch>
 
    
    </div>
    
    </BrowserRouter>
   
  );
}

export default App;
