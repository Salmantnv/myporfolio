import React from "react";
import Typed from "react-typed";
const Header = () => {
    return (
        <div className = "header-wrapper">
            <div className="main-info">
                <h1>web development and websites promotions </h1>
                <Typed 
                className="typed-text"
                strings={["Web Development","Software Development","Game Development",]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <h5 href="www.codeacademy.com" className="btn-main-offer">Contact Me</h5>
            </div>
        </div> 

    )
}

export default Header;
