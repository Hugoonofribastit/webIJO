import React from 'react'
import './sectioncard.css';

const SectionCard = () => {
    return ( 
        <section className='ssectionCard'>
            <h3> INSTITUCIONAL</h3>
            <div className="transparentCards-container sectioncard">
                <div className="transparentCard">
                    <p className="transparentCard-text">Historia</p>
                </div>
                <div className="transparentCard">
                    <p className="transparentCard-text">Proyecto de Educación Parroquial</p>
                </div>
                
            </div>
        </section>
     );
}
 
export default SectionCard;