import React, {useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import './profile.css'

const Profile = ({ setLoginUser }) => {
        const history=useNavigate()
// const Homepage = () => {
  const [user, setUser] = useState(null);
  const [componentMounted, setComponentMounted] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser && componentMounted) {
      setUser(JSON.parse(loggedInUser));
    }
  }, [setLoginUser, componentMounted]);

  useEffect(() => {
    setComponentMounted(true);
  }, []);

              
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="">Insta Clone</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/upload">Upload Content</a>
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
        <div className="sp">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" onClick={()=>history("/feed")}>Search</button>
        </div>
        <button className="btn btn-outline-success" type="submit" onClick={() => {setLoginUser({});localStorage.removeItem('loginUser');}}>Logout</button>
      </form>
    </div>
  </div>
        </nav>
        <div style = {{maxWidth:"65%",margin:"0px auto" }}>
            <div style ={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 10px",
                borderBottom: "1px solid grey",
                padding:"20px"
            }}>
                <div>
                    <img style ={{width:'160px',height:'160px',borderRadius:'80px'}} src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" /> 
                </div>
                <div>
                    <h4>Shagun Fucks Harsh</h4>
                    <div style = {{
                        display:"flex",
                        justifyContent:"space-between",
                        width:"110%"
                    }}>
                        <h5>69 posts</h5>
                        <h5>69 followers</h5>
                        <h5>69 followings</h5>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <img className="item" src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
                <img className="item" src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
                <img className="item" src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
                <img className="item" src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
                <img className="item" src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
                <img className="item" src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
            </div>  
        </div>
        </>
    )
}

export default Profile
