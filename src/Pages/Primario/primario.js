import React, { useState } from 'react';
import Gallery from '../../Components/imgGallery/gallery';





const Primario = () => {
	
   

    return (  


        <>
        
        <div className="cont-cont mb-5">
            <div className="cont secundario">
            <h3 className="title-eoe mb-5">PRIMARIO </h3>
            <figure>
                    <img className="image_frente image_frente1" src={process.env.PUBLIC_URL+ `/imagenes/frente1.jpg`} alt="img" />
                    <figcaption>DIEGEP Nº 0192</figcaption>
                </figure>
                <p className="text-bold"><b>Sede Hernandarias 6767 – Mar del Plata</b></p>
                <h5>Turno tarde: 1º, 2º y 3er. Grado (Tres secciones cada uno)</h5>
                <h5>Turno mañana: 4to, 5to y 6to. Grado (Tres secciones cada uno) </h5>
                <ul>
                    <li>Formación religiosa</li>
                    <li>Informática</li>
                    <li>Programación y Robótica</li>
                    <li>Educación física</li>
                    <li>Inglés</li>
                    <li>Teatro</li>
                    <li>Talleres de handball, basket y volley</li>
                    <li>Salidas educativas</li>
                    <li>Campamentos</li>
                </ul>
                                                
             </div>
             <Gallery/>
             
        </div>
        
            
           
        </>
    );
}
 
export default Primario;