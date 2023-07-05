import React from 'react';
import logofoot from "../../Assets/logo.png"
import {Link as LinkRouter} from "react-router-dom"


const Foot = () =>{
return(
<div className='piedepagina'>
    <h4 className='text-white title-foot'>Contacto</h4>
    <div className='d-flex cont-foot'>
       <div className='dual mt-3'>
       <div className='mb-5'>
            <p className='text-white font-foot2'><b>Jardín</b></p>
            <p className='text-white font-foot'>Dir: Hernandarias 6767</p>
            <p className='text-white font-foot'>Tel: 0223-482-1178</p>
            <p className='text-white font-foot'>
                email: dipregep1112@gmail.com
            </p>
        </div>
        <div>
             <p className='text-white font-foot2'><b>Jardín Sede Friuli</b></p>
            <p className='text-white font-foot'>Dir: Friuli 2367</p>
            <p className='text-white font-foot'>Tel: 0223-482-8335</p>
            <p className='text-white font-foot'>
                email: dipregep1112@gmail.com
            </p>
        </div>
       </div>
        <div className='dual mt-3'>
        <div className='mb-5'>
            <p className='text-white font-foot2'><b>Primaria</b></p>
            <p className='text-white font-foot'>Dir: Hernandarias 6767</p>
            <p className='text-white font-foot'>Tel: 0223-482-1489</p>
            <p className='text-white font-foot'>
                email: primariajesusobrero@gmail.com
            </p>
        </div>
        <div>
        <p className='text-white font-foot2'><b>Secundaria</b></p>
            <p className='text-white font-foot'>Dir: Dolores 836</p>
            <p className='text-white font-foot'>Tel: 0223-482-1178</p>
            <p className='text-white font-foot'>
                email: direccionsecundariajesusobrero@gmail.com
            </p>
        </div>
        </div>
        <div className='dual mt-3'>
        <p className='text-white font-foot2'><b>Administración</b></p>
            <p className='text-white font-foot'>Dir: Hernandarias 6767</p>
            <p className='text-white font-foot'>Tel: 0223-482-1178 / 482-1489</p>
            <p className='text-white font-foot'>Whatsapp: 223-5-524545</p>
            <p className='text-white font-foot'>
                email: admjesusobreromdp@gmail.com
            </p>
        </div>
    </div>

</div>
    )
}
 export default Foot;