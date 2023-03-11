import React,{useState} from "react";
import axios from "axios"//Helps to connect with backend with promise API
import "./signup.css";
import {useNavigate} from "react-router-dom"
const Signup = () => {
    const history=useNavigate()
    const[user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })
    const handleChange=e=>{
        const{name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const register=()=>{
        const{name,email,password,reEnterPassword}=user
        if(name&&email&&password&&(password===reEnterPassword)){
            axios.post("http://localhost:5000/signup",user)
            .then(res=>{alert(res.data.message)
                history("/login")
            })
        }
        else{
            alert("invalid input")
        }
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Insta Clone</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        <div className="al">
        <div className="signup">
        {console.log("User",user)}
        <h1>Signup</h1>
            <input type="text"name="name"value={user.name} placeholder="Your Name" onChange={handleChange}></input>
            <input type="text"name="email"value={user.email} placeholder="Your Email" onChange={handleChange}></input>
            <input type="password"name="password"value={user.password} placeholder="Your Password" onChange={handleChange}></input>
            <input type="password"name="reEnterPassword"value={user.reEnterPassword} placeholder="Re-enter Password"onChange={handleChange}></input>
            <div className="button" onClick={register}>Signup</div>
        </div>
        </div>
        </>
    )}
export default Signup