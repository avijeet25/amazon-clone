import React, {useEffect} from 'react'
import './App.css';
import Header from './Header'
import Home from './Home';
import Checkout from './Checkout'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Login';
import {auth} from './firebase'
import {useStateValue} from './StateProvider'
function App() {
  
  const [{}, dispatch] = useStateValue();
  //this useEffect function will keep the track of who is signed in
  useEffect(() => {
    //this will only run once when the app component loads ...
    //onAuthStateChanged will fire this code when user logs in or logs out
    auth.onAuthStateChanged((authUser) => {
      console.log("user is - ", authUser);
      if (authUser) {
        //user just logged in or user was logged in
        //setting user into the data layer each time user logs in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            {/* login */}
            <Login/>
          </Route>
          <Route path="/checkout">
            {/* Header */}
            <Header />
            {/* CHECKOUT */}
            <Checkout />
          </Route>
          <Route path="/">
            {/* Header */}
            <Header />
            {/* Home */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
