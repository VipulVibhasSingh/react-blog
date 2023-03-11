import './App.css';
import React,{useState,useEffect}  from 'react';
import axios from 'axios';
import Login from "./components/login/login"
import Signup from "./components/signup/signup"
import Homepage from './components/homepage/homepage';
import Forgot from './components/forgot/forgot';
import Reset from './components/reset/reset';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App(){

  const [user, setLoginUser] = useState(() => {
    const loggedInUser = localStorage.getItem('loginUser');
    if (loggedInUser && loggedInUser.trim() !== "") {
      try {
        return JSON.parse(loggedInUser);
      } catch (error) {
        console.error("Error parsing user data", error);
      }
    }
    return {};
  });

  return (
    <>
    <Router>
      
      <Routes>
        <Route exact path="/" element={user&&user._id?<Homepage setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/>}></Route>
        <Route exact path="/login"element={<Login setLoginUser={setLoginUser}/>} ></Route>
        <Route path="/signup"element={<Signup/>}></Route>
        <Route path="/forgot"element={<Forgot/>}></Route>
        <Route path="/reset"element={<Reset/>}></Route>
      </Routes>
      
    </Router>
    </>
    
  );
}

export default App;