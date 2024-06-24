import React from 'react';
import datosini3 from "../../datos3";
import ModalImage from 'react-modal-image';
//EN 650 DISPLAY NONE
const Gallery3 = () => {
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
               {datosini3.map((img, index) => (
                    <div key={img.id}>
                    <ModalImage
                         small={process.env.PUBLIC_URL + "/imagenes/imgsecundario/" + img.image}
                         large={process.env.PUBLIC_URL + "/imagenes/imgsecundario/" + img.image}
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
   
   export default Gallery3;



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
