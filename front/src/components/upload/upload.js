import React, {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import "./upload.css"

const Upload = () => {
    const history=useNavigate()
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light" style={{position:"relative"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="">Insta Clone</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
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
        </form>
    </div>
  </div>
  </nav>
    <div className="card input-filled"
        style= {{
            marginTop:"45%",
            marginLeft:"22%",
            maxWidth:"55%",
            padding:"20px",
            marginTop:"10%",
            textAlign:"center",
        }}
    >
        <input type = "text" placeholder='Title'/>
        <input type = "text" placeholder='Body'/>
        <div className="file-field input-field">
            <div className="btn #64b5f6 blue darken-1">
                <span>Upload Image</span>
                <input type="file" />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
        </div>
        <button className="btn waves-effect waves-light #64b5f6 blue darken-1" sx = {{p:'10px'}}>Submit post
        </button>
    </div>
    </>
  )
}

export default Upload
