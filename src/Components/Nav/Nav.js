import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link as LinkRouter} from "react-router-dom"


function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" className='Barra' sticky="top">
      <Container>
      <LinkRouter to="/" className='link'>
         <Navbar.Brand>Inicio</Navbar.Brand>
      </LinkRouter>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Institucional" id="collasible-nav-dropdown">
              <NavDropdown.Item >
              <LinkRouter to="/historia" className='link'>
                Historia
              </LinkRouter> 
                </NavDropdown.Item>
              <NavDropdown.Item >
                Proyecto Ed. Pastoral
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  >Parroquia</Nav.Link>
            <Nav.Link  >E.O.E.</Nav.Link>
            <Nav.Link  >Egresados</Nav.Link>
            <NavDropdown title="Niveles" id="collasible-nav-dropdown">
              <NavDropdown.Item >Inicial</NavDropdown.Item>
              <NavDropdown.Item >
                Primario
              </NavDropdown.Item>
              <NavDropdown.Item >Secundario</NavDropdown.Item>
             {/*  <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link  >Ctro. Estudiantes</Nav.Link>
            <Nav.Link >Biblioteca</Nav.Link>
            <Nav.Link eventKey={2}>
              U.P.F.
            </Nav.Link>
            <Nav.Link>Noticias</Nav.Link>
            <Nav.Link>Administración</Nav.Link>
            <Nav.Link>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;