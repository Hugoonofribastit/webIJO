import React, { useState } from 'react';
import Gallery from '../../Components/imgGallery/gallery';





const Inicial = () => {
	
   

    return (  


        <>
        
        <div className="cont-cont mb-5">
            <div className="cont">
                <h3 className="title-eoe mb-5">INICIAL </h3>
                
                    <div className="d-flex flex-wrap mt-5">
                        <figure>
                            <img className="image_frente image_frente1" src={process.env.PUBLIC_URL+ `/imagenes/frente1alt.jpg`} alt="img" />
                            <figcaption>DIEGEP Nº 0192</figcaption>
                        </figure>
                        <figure>
                            <img className="image_frente" src={process.env.PUBLIC_URL+ `/imagenes/frente2.jpg`} alt="img" />
                            <figcaption>DIEGEP Nº 1112</figcaption>
                        </figure>
                    </div>
                    <p className="text-bold"><b>Sedes Hernandarias 6767 y Friuli 2367 – Mar del Plata</b></p>
                    <h5>Salas de 3, 4 y 5 años en Turno mañana y tarde</h5>
                    <ul>
                        <li>Catequesis</li>
                        <li>Educación musical</li>
                        <li>Educación física</li>
                        <li>Inglés</li>
                        <li>Cerámica</li>
                        <li>Campamentos</li>
                    </ul>
                                    
                                                
             </div>
             <Gallery/>
             
        </div>
        
            
           
        </>
    );
}
 
export default Inicial;