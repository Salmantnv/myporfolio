import React from "react";
import logo from "../tnvpower.png";
// React font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-scroll';
const Navbar = () => {
 
 
  
  return (

      
        
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> <img className="logo" src={logo} alt="logo..."/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color : "#fff"}} />;
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to = "home"  >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to = "aboutme" offset={-40}  >About me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to = "services" offset={-60}  >services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to = "portfolio" offset={-60}  >portfolio</Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to = "review" offset={-55}  >Reviews</Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link" to = "contacts" offset={-55} >contacts</Link>
              </li>
              </ul>
              </div>
        </div>
        </div>
        
      </nav>
      
    )
}

export default Navbar
