import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link as LinkRouter} from "react-router-dom"
/* import { useNavigate } from 'react-router-dom'; */

function CollapsibleExample() {
  /* const navigate = useNavigate(); */

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    footer.scrollIntoView({ behavior: 'smooth' });
  };

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
                <LinkRouter to="/proyecto_ed_pastoral" className='link'>
                  Proyecto Ed. Pastoral
                </LinkRouter>
              </NavDropdown.Item>
            </NavDropdown>
            <LinkRouter to="/parroquia" className='link2'>
           Parroquia
            </LinkRouter>
            <NavDropdown title="Niveles" id="collasible-nav-dropdown">
              <NavDropdown.Item ><LinkRouter to="/inicial" className='link'>Inicial</LinkRouter></NavDropdown.Item>
              <NavDropdown.Item >
              <LinkRouter to="/primario" className='link'>
                Primario
              </LinkRouter>
              </NavDropdown.Item>
              <NavDropdown.Item ><LinkRouter to="/secundario" className='link'>Secundario</LinkRouter></NavDropdown.Item>
             {/*  <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Nav>
            
            <Nav.Link  onClick={scrollToFooter}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;