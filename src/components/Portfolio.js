import React from 'react';
import ravenous from "../images/ravenous.png"
import android from "../images/android.jpeg"
import language from "../images/language.jpg"
import jamming from "../images/jamming.png"
/*********** FontAwesome imports ********/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus} from '@fortawesome/free-solid-svg-icons'
/**********  Popupbox imports **********/
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"

                                                      

const Portfolio = () => {

//Netflix

const openPopupBoxRavenous = () => {
   
            const content = ( 
                  <>
                  <img className = "popupRavenousPicture" src = {ravenous} alt = "Ravenous Clone Project ..."/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  <b>Github</b>  <a className = "hyper=link" onClick={() => window.open("https://github.com/Salmantnv/myporfolio")}>https://github.com/Salmantnv/myporfolio</a>
                      </>
                  )
                      PopupboxManager.open({content})
          }

          const popupboxConfigRavenous = {
              titleBar: {
                enable: true,
                text: 'Ravenous Project'
              },
              fadeIn: true,
              fadeInSpeed: 500
            }


// Jamming 
  
            const openPopupBoxJamming = () => {
              
                const content = ( 
                    <>
                    <img className = "popupRavenousPicture" src = {jamming} alt = "Jamming Project..."/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <b>Github</b>  <a className = "hyper=link" onClick={() => window.open("https://github.com/Salmantnv/myporfolio")}>https://github.com/Salmantnv/myporfolio</a>
                        </>
                      )
                        PopupboxManager.open({content})
            }
            const popupboxConfigJamming = {
              titleBar: {
                enable: true,
                text: 'Jamming app'
              },
              fadeIn: true,
              fadeInSpeed: 500
            }

//Medical app
            

            const openPopupBoxMedical = () => {
              
              const content = ( 
                  <>
                  <img className = "popupRavenousPicture" src = {android} alt = "Medical Simulator Project ..."/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  <b>Github</b>  <a className = "hyper=link" onClick={() => window.open("https://github.com/Salmantnv/myporfolio")}>https://github.com/Salmantnv/myporfolio</a>
                      </>
                    )
                      PopupboxManager.open({content})
            }
            const popupboxConfigMedical = {
            titleBar: {
              enable: true,
              text: 'Medical assitance simulator app'
            },
            fadeIn: true,
            fadeInSpeed: 500
            }
            
            
//Gepardo 
          

          const openPopupBoxGepardo = () => {
            
            const content = ( 
                <>
                <img className = "popupRavenousPicture" src = {android} alt = "Gepardo Project ..."/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <b>Github</b>  <a className = "hyper=link" onClick={() => window.open("https://github.com/Salmantnv/myporfolio")}>https://github.com/Salmantnv/myporfolio</a>
                    </>
                  )
                    PopupboxManager.open({content})
          }
          const popupboxConfigGepardo = {
          titleBar: {
            enable: true,
            text: 'Gepardo e-commerce website'
          },
          fadeIn:true,
          fadeInSpeed: 500
          }





    return (
     <div className = "portfolio-wrapper" id = "portfolio">
         <div className = "container">
             <h1 className = "text-uppercase text-center py-5">portfolio</h1>
            <div className = "image-box-wrapper row justify-content-center" >
                
              <div className = "portfolio-image-box" onClick = {openPopupBoxRavenous}>
                <img className="portfolio-image" src={ravenous} alt="ravenous"/>
                <div className = "overflow"></div>
                <FontAwesomeIcon className ="portfolio-search-icon" icon = {faSearchPlus}/>
              </div> 
                 {/* **/}
            <div className = "portfolio-image-box" onClick = {openPopupBoxJamming} >
                <img className="portfolio-image" src={jamming} alt="jamming"/>
                <div className = "overflow"></div>
                <FontAwesomeIcon className ="portfolio-search-icon" icon = {faSearchPlus}/>
            </div> 
                 {/* **/}
            <div className = "portfolio-image-box" onClick = {openPopupBoxMedical}>
                <img className="portfolio-image" src={android} alt="android"/>
                <div className = "overflow"></div>
                <FontAwesomeIcon className ="portfolio-search-icon" icon = {faSearchPlus}/>
                <PopupboxContainer {...popupboxConfigMedical} />
              
            </div> 
                 {/* **/}
            <div className = "portfolio-image-box" onClick = {openPopupBoxGepardo}>
                <img className="portfolio-image" src={language} alt="langauge"/>
                <div className = "overflow"></div>
                <FontAwesomeIcon className ="portfolio-search-icon" icon = {faSearchPlus}/>
                <PopupboxContainer {...popupboxConfigGepardo} />
            </div>
        </div>
     </div>
     <PopupboxContainer {...popupboxConfigRavenous} />
     <PopupboxContainer {...popupboxConfigJamming} />
     <PopupboxContainer {...popupboxConfigMedical} />
     <PopupboxContainer {...popupboxConfigGepardo} />
 </div>
   
    )
}

export default Portfolio;
