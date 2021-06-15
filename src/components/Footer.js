import React from 'react';
import {
    FacebookIcon,
    FacebookShareButton,
    TwitterIcon,
    TwitterShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    RedditIcon,
    RedditShareButton
} from "react-share";

const Footer = () => {
    return (
        <div className = "footer-nav">
            <div className = "container">
                <div className = "row">
                    <div className = "col-lg-4 col-sm-6 col-xs-6">
                       
                       <div className = "d-flex">
                           <a className="adress-footer info-footer" href = "https://goo.gl/maps/X8wpqrZqBceXeroUA">Via Giuseppe Palombini, 00165, Rome, Italy</a>
                        </div>
                        
                        
                        <div className = "d-flex">
                           <a href = "tel:+393394812655" className = "tel-footer info-footer">+393394812655</a>
                         </div>
                        
                        
                        <div className = "d-flex">
                           <p href = "tnvsmn@gmail.com" className="email-footer info-footer">tnvsmn@gmail.com</p>
                        </div>
                       
                    </div>
                    <div className = "col-lg-3 col-sm-2 col-xs-6">
                       <div className = "row">
                       <div className = "col">
                           <p className="footer-services">Home</p>
               
                          <p className="footer-services">About Me</p>
                    
                          <p className="footer-services">Services</p>
                        
                       </div>
                       <div className = "col">
                        <p className="footer-services">How work</p>
              
                       <p className="footer-services">Portfolio</p>
                      
                        <p className="footer-services">Contacts</p>
                  
                             </div>
                         </div>
                     </div>
                
                <div className = "col-lg-5 col-sm-5 col-xs-6 align-items-center share-center">
                    <div className = "d-flex justify-content-center">
                        <FacebookShareButton
                        url = {"https://www.linkedin.com/in/salman-tanirverdiyev-730808157/"}
                        quote = {"TnvPower"}
                        hastag = {"#React.js"}

                        >
                            <FacebookIcon className = "mx-3" size = {36} />
                        </FacebookShareButton>
                    

                   
                        <TwitterShareButton

                        url = {"https://www.linkedin.com/in/salman-tanirverdiyev-730808157/"}
                        quote = {"TnvPower"}
                        hastag = {"#React.js"}

                        >
                            <TwitterIcon className = "mx-3" size = {36} />
                        </TwitterShareButton>
>
                        <LinkedinShareButton
                        url = {"https://www.linkedin.com/in/salman-tanirverdiyev-730808157/"}
                        quote = {"TnvPower"}
                        hastag = {"#React.js"}>
                            <LinkedinIcon className = "mx-3" size = {36} />
                        </LinkedinShareButton>
              

                
                        <RedditShareButton
                        url = {"https://www.linkedin.com/in/salman-tanirverdiyev-730808157/"}
                        quote = {"TnvPower"}
                        hastag = {"#React.js"}

                        >
                            <RedditIcon className = "mx-3" size = {36} />
                        </RedditShareButton>
                 
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;
