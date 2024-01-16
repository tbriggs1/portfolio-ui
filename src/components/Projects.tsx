import React from "react";
import Carousel from "react-bootstrap/Carousel";
import blue from "../images/blue.jpg";

const Projects: React.FC = () => {
  return (
    <div className="project-main" style={{ width: "100%", margin: "auto" }}>
      <Carousel>
        <Carousel.Item style={{ height: "300px" }}>
          <div className="project-box">
            <div className="project-text">
              <h3>Terraform</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
            <div className="project-image">
              <img src={blue} />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ height: "300px" }}>
          <div className="project-box">
            <div className="project-text">
              <h3>Jenkins</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
            <div className="project-image">
              <img src={blue} />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Projects;
