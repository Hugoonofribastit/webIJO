import {Link as LinkRouter} from "react-router-dom"
import Nav from 'react-bootstrap/Nav';



function StackedExample() {
  return (
    
    <Nav  className="flex-column sticky-side" >
         
      <LinkRouter className="underl2">Biblioteca</LinkRouter>
      <LinkRouter className="underl2" to="/eoe">Equipo de Orientación Escolar</LinkRouter>
      <LinkRouter className="underl2" to="/upf">UPF</LinkRouter> 
    </Nav>
    
  );
}

export default StackedExample;