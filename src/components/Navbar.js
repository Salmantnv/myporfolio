import React from "react";
import logo from "../tnvpower.png";
// React font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> <img className="logo" src={logo} alt="logo..."/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color : "#fff"}} />;
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="www.codeacademy.com">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.codeacademy.com">About me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.codeacademy.com">services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.codeacademy.com">how work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.codeacademy.com">protfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.codeacademy.com">contacts</a>
              </li>
              </ul>
              </div>
        </div>
        </div>
        
      </nav>
      
    )
}

export default Navbar
