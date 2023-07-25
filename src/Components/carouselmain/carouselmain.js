import React from 'react'
import Carousel from 'react-grid-carousel'
import {Col,Row, Container} from "react-bootstrap";
import datosini from "../../datos";

 const Car = () => {
  return (
  
    <Container className='mt-5 carr-cont'>
      <Row className="justify-content-center align-items-center mt-5">
        <Col><h1 className='text-center textCarr mt-5'>CARRUSEL DE IMAGENES</h1></Col>
      </Row>
      <Row className="justify-content-center mt-5 mb-5">
        <Col>
          <Carousel cols={2} rows={2} gap={10} autoplay={3000} loop
                  responsiveLayout={[
                    {
                      breakpoint: 1200,
                      cols: 2,
                      rows: 2,
                      loop: true,
                      autoplay: 4500,
                     
                      
                    },
                    

                    {
                      breakpoint: 500,
                      cols: 1,
                      rows:2,
                      loop: true,
                      autoplay:4500,
                      
                      
                    },
                  
                  ]}
                  mobileBreakpoint={450} 
                  >
                  {datosini.map(evento =>
                  <Carousel.Item key={evento.id}>
                    <div className="imagecar" >
                        <img className="image__imgcar" src={process.env.PUBLIC_URL+ `/imagenes/imginicial/${evento.image}`} alt="img" />
                       
                     </div>
                  </Carousel.Item>
                )}
            </Carousel>
        </Col>
      </Row>
    </Container>
   
  )
  
}
export default Car;