import {Link as LinkRouter} from "react-router-dom"
import ListGroup from 'react-bootstrap/ListGroup';

import Nav from 'react-bootstrap/Nav';

function StackedExample() {
  return (
    
    <Nav  className="flex-column sticky-side" >
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
    
  );
}

export default StackedExample;