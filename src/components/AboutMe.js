import React from 'react'
import laurea from '../laurea.jpg';

const AboutMe = () => {
    return (
        <div className = "container py-5">

          <div className = "row">
              <div className = "col-lg-6 col-xm-12 pb-2">
            <div className = "photo-wrap">
            <img src = {laurea} className = "profile-pic" alt = "profile-pic..."/>
            </div>
              </div>
              <div className = "col-sm-6">
                  <h1 className = "about-me">About Me</h1>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/><br/>
                      
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      
                      
                      <br/><br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      
                      
                     "</p>
              </div>
          </div>
            
        </div>
    )
}

export default AboutMe
