
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from '../images/avatar-1.png';
import avatar2 from '../images/avatar-2.png';
import avatar3 from '../images/avatar-3.png';
import avatar4 from '../images/avatar-4.png';


const TestimonialsCarousel = () => {
    return (
        <Carousel
        autoPlay = {true}
        infiniteLoop = {true}
        interval = {3000}
        showArrows = {true}
        showThumbs = {false}

        >
        <div className = "carousel-content">
            <img src = {avatar1} alt = "John Doe 1"/>
                <h3>John Doe 1</h3>
                <p> Contrary  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
            
            </div>

        <div className = "carousel-content">
            <img src = {avatar2} alt = "John Doe 2"/>
            <h3>John Doe 2</h3>
                <p> Contrary  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
        
            </div>

        <div className = "carousel-content">
            <img src = {avatar3} alt = "John Doe 3"/>
            <h3>John Doe 3</h3>
                <p> Contrary looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
            
            </div>

        <div className = "carousel-content">
            <img src = {avatar4} alt = "John Doe 4"/>
                <h3>John Doe 4</h3>
                <p> Contrary looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
           
            </div>
        </Carousel>
    )
}

export default TestimonialsCarousel

