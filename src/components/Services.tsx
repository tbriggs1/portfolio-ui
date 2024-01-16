import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import terraform from '../images/HashiCorp_VerticalLogo_Black_RGB.svg'

const Services: React.FC = () => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <Col sm={3}>
        <Card style={{ width: "18rem" }}>
          <div className="d-flex justify-content-center">
            <Card.Img variant="top" src={terraform} style={{ width: '150px', height: 'auto' }}/>
          </div>
          <Card.Body>
            <Card.Title>DevOps</Card.Title>
            <Card.Text>
              Working with IAC and CI/CD to encourage DevOps principles within organizations, allowing
              for more efficient teams and working patterns.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Learn More</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={3}> 
        <Card style={{ width: "18rem" }}>
          <div className="d-flex justify-content-center">
            <Card.Img variant="top" src={terraform} style={{ width: '150px', height: 'auto' }}/>
          </div>
          <Card.Body>
            <Card.Title>AWS</Card.Title>
            <Card.Text>
              Providing solutions and implementations for your cloud architecture within AWS and migrating
              from on-prem to the cloud
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Learn More</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={3}> 
        <Card style={{ width: "18rem" }}>
          <div className="d-flex justify-content-center">
            <Card.Img variant="top" src={terraform} style={{ width: '150px', height: 'auto' }}/>
          </div>
          <Card.Body>
            <Card.Title>Developer</Card.Title>
            <Card.Text>
              Building cloud native applications and microservices, providing the best advice on how to develop applications
              to maximize output.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Learn More</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Services;
