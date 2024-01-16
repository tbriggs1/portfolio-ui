import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import blue from '../images/blue.jpg';

const imageStyle = {
    width: "500px", // Adjust the width as needed
    height: "300px", // Adjust the height as needed
  };
  

const Projects: React.FC = () => {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <Carousel>
            <Carousel.Item>
                <img src={blue} alt="First Slide" style={imageStyle}/>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={blue} alt="Second Slide" style={imageStyle}/>
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={blue} alt="Third Slide" style={imageStyle}/>
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Projects;