import React from 'react';
import datosini from "../../datos";
import ModalImage from 'react-modal-image';
//EN 650 DISPLAY NONE
const Gallery = () => {
     /* const thumbnailSize = 200; */ // Tamaño en píxeles para las miniaturas en la galería
   
     const galleryStyle = {
       display: "grid",
       gridTemplateColumns: "repeat(4, 1fr)",
       gap: "10px",
       
       
     };
     
     const imageStyle = {
       width: "100%",
       height: "auto",
       objectFit: "cover",
     };
   
     return (
       <>  
       <div className='gallery-container'>
            <h2 className='gallery-title'>Algunas fotitos...</h2>
            <p>haga click en las imagenes para maximizar y/o descargar</p>
            <div style={galleryStyle} className>
               {datosini.map((img, index) => (
                    <div key={img.id}>
                    <ModalImage
                         small={process.env.PUBLIC_URL + "/imagenes/imginicial/" + img.image}
                         large={process.env.PUBLIC_URL + "/imagenes/imginicial/" + img.image}
                         alt={"Image " + img.id}
                         showDownload={true} // Mostrar el enlace de descarga en el modal
                         style={imageStyle}
                    />
                    </div>
         ))}
          </div>
       </div>
       </> 
     );
   };
   
   export default Gallery;



  /*   <div>
      {datosini.map((img) => (
        <ModalImage
          key={img.id}
          small={process.env.PUBLIC_URL + "/imagenes/imginicial/" + img.image}
          large={process.env.PUBLIC_URL + "/imagenes/imginicial/" + img.image}
          alt={"Imagen " + img.id}
        />
      ))}
    </div> */
