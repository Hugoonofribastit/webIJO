import {Link as LinkRouter} from "react-router-dom"

import Nav from 'react-bootstrap/Nav';



function StackedExample() {
  return (
    
    <Nav  className="flex-column sticky-side" >
        
      <Nav.Link >Biblioteca</Nav.Link>
      <Nav.Link eventKey="link-1">Centro de Estudiantes</Nav.Link>
      <Nav.Link eventKey="link-2">UPF</Nav.Link>
    </Nav>
    
  );
}

export default StackedExample;