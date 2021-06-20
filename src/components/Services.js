import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faReact,faNode,faAndroid } from '@fortawesome/free-brands-svg-icons'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
const Services = () => {
    return (
        <div className = "services" id = "services">
            <h1 className="py-5">My services</h1>
            <div className = "container">
                <div className= "row">
                     <div className = "col-md-3 col-sm-6">
                     <div className = "box">
                     <div className= "circle"><FontAwesomeIcon className = "icons" icon={faReact} size = "2x" /></div>
                    <h3>React.js,Web app Development</h3>
                     <p>l will develop your web app that will suprise your clients. </p>
                     </div>
                 </div>    
                   
                 <div className = "col-md-3 col-sm-6">
                 <div className = "box">
                 <div className= "circle"><FontAwesomeIcon className = "icons" icon={faPalette} size = "2x" /></div>
                    
                     <h3>Front-end development</h3>
                     <p>Adobe XD will be our first friend to build and design your websites or apps with high versitile way</p>
                     </div>
                 </div>  

                 <div className = "col-md-3 col-sm-6">
                 <div className = "box">
                 <div className= "circle"><FontAwesomeIcon className = "icons" icon={faNode} size="2x" /></div>
                     <h3>Back-end development</h3>
                     <p>Web development for all kinds of needs</p>
                     </div>
                 </div>  

                 <div className = "col-md-3 col-sm-6">
                    <div className = "box">
                    <div className= "circle"><FontAwesomeIcon className = "icons" icon={faAndroid} size= "2x"/></div>
                    <h3>Android app development</h3>
                    <p>You need an app for your business,you are in the right place, lets make an outstanding app for your business</p>
                    </div>
                 </div>  
                </div>     
            </div>            
        </div>
    )
}

export default Services;

