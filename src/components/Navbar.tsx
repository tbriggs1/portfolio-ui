import React from "react";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";

const Navbar: React.FC = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <div className="d-flex align-items-center">
          <BootstrapNavbar.Brand href="#home">Tom Briggs</BootstrapNavbar.Brand>
        </div>
        <div className="ml-auto">
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">My Services</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#blogs">Blogs</Nav.Link>
              <Nav.Link
                href="#contact"
                style={{ fontWeight: "bold", color: "red" }}
              >
                Contact Me
              </Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </div>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
