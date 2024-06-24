import React, { useState } from 'react';
import Gallery3 from '../../Components/imgGallery/gallery3';





const Secundario = () => {
	
   

    return (  


        <>
        
        <div className="cont-cont mb-5">
            <div className="cont secundario">
            <h3 className="title-eoe mb-5">SECUNDARIO </h3>
                <figure>
                    <img className="image_frente image_frente1" src={process.env.PUBLIC_URL+ `/imagenes/frentesecu.jpg`} alt="img" />
                    <figcaption>DIEGEP Nº 4222</figcaption>
                </figure>
                <p className="text-bold"><b>Sede Dolores 836 – Mar del Plata</b></p>
                <h5>Orientación: Economía y Gestión de las organizaciones</h5>
                <h5>Turno tarde: 1º, 2º y 3er. año (Tres secciones cada uno)</h5>
                <h5>Turno mañana: 4to, 5to y 6to. año (Tres secciones cada uno)</h5>
                <ul>
                    <li>Formación Humana y Cristiana</li>
                    <li>Informática</li>
                    <li>Programación y Robótica</li>
                    <li>Educación física</li>
                    <li>Inglés</li>
                    <li>Teatro</li>
                    <li>Especialización en prácticas contables</li>
                    <li>Proyectos de extensión educativa</li>
                    <li>Talleres de handball, basket y volley</li>
                    <li>Salidas educativas</li>
                    <li>Campamentos</li>
                    <li>Viajes de estudio</li>
                </ul>            
                                                
             </div>
             <Gallery3/>
             
        </div>
        
            
           
        </>
    );
}
 
export default Secundario;