import React from "react";
import {Nav, Navbar,Container} from "react-bootstrap/";
import { Link } from "react-router-dom";
import "../../css/NavBarB.css";
import logo from '../../assets/img/logo.png';

export const NavBarB = () => {
    return (
            <Navbar   fixed="top" expand="lg" bg="white" variant="light">
              <img className="nav-img"
                src={logo}
                alt="Logo de Voz Total"
              />
              <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                <Nav className= "ms-auto">
                  <Nav.Link onClick={() => window.scrollTo(0, 0)} as={Link} to="/home">Inicio</Nav.Link>
                  <Nav.Link onClick={() => window.scrollTo(0, 0)} as={Link} to="/nosotros">Nosotros</Nav.Link>
                  <Nav.Link onClick={() => window.scrollTo(0, 0)} as={Link} to="/clientes">Clientes</Nav.Link>
                  <Nav.Link onClick={() => window.scrollTo(0, 0)} as={Link} to="/testimonios">Testimonios</Nav.Link>
                  <Nav.Link onClick={() => window.scrollTo(0, 0)} as={Link} to="/politica">Politica de Privacidad</Nav.Link>
                  <Nav.Link onClick={() => window.scrollTo(0, 0)} as={Link} to="/contacto">Contacto</Nav.Link>
                </Nav>
                  </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        };