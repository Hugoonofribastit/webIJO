import React from 'react'
import './sectioncard.css';
import {Link as LinkRouter} from "react-router-dom"

const SectionCard = () => {
    return ( 
        <section className='ssectionCard'>
            <h3> INSTITUCIONAL</h3>
            <div className="transparentCards-container sectioncard">
                <div className="transparentCard">
                <LinkRouter to="/historia" className='link'>
                <p className="transparentCard-text">Historia</p>
              </LinkRouter> 
                    
                </div>
                <div className="transparentCard">
                    <p className="transparentCard-text">Proyecto de Educación Parroquial</p>
                </div>
                
            </div>
        </section>
     );
}
 
export default SectionCard;