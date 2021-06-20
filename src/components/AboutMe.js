import React from 'react'
import laurea from '../laurea.jpg';

const AboutMe = () => {
    return (
        <div className = "container py-5" id = "aboutme">

          <div className = "row  aboutme-section">
              <div className = "col-lg-6 col-xm-12 pb-2">
            <div className = "photo-wrap">
            <img src = {laurea} className = "profile-pic" alt = "profile-pic..."/>
            </div>
              </div>
              <div className = "col-sm-6">
                  <h1 className = "about-me">About Me</h1>
                  <p> l am self-taught web developer and l am designing websites as freelancer. l shared some of my projects in my portfolio section and if you are curious about that l also attached Github links in case you would like to check it. I use React.js for web application developemnt and Android Studio (Java) for mobile app development. <br></br> 
                  <br></br>I have 1 year experience as a web developer and in these days l am improving my backend development skills, especially I concentrated myself with learning Postgre Sql , java backend development and node.js.
                  <br></br><br></br>
                  Currently, l am legally residing in Italy and It would be pleasure to collaborate with some companies. Altough, my personal portfolio website is still under development process, if you have any questions feel free to contact with me!</p>
              </div>
          </div>
            
        </div>
    )
}

export default AboutMe
