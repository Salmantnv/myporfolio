import React from "react";
import Typed from "react-typed";
import {Link} from 'react-scroll';
const Header = () => {
    return (
        <div className = "header-wrapper" id = "home">
            <div className="main-info">
                <h1>web development and websites promotions </h1>
                <Typed 
                className="typed-text"
                strings={["Web Development","Software Development","Web design",]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <Link to = "contacts" offset = {-55}><h5 href="www.codeacademy.com" className="btn-main-offer">Contact Me</h5></Link>
            </div>
        </div> 

    )
}

export default Header;
