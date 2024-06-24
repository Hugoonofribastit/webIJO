import React from 'react'
import Main from '../../Components/Main/Main'; 
import StackedExample from '../../Components/SideBar/SideBar';
import Car from '../../Components/carouselmain/carouselmain';
import 'animate.css';





const Home = () =>{
    
return(
<>
<div className='borderbottom'>
    <Main/>
    
    <div className='di-flex'>
        <StackedExample/>
        <div className='imgside d-flex'>
            <h2 className='main-title2 animate__animated animate__jackInTheBox'>¡Vamos a estudiar!</h2>
           <img className="image_side" src={process.env.PUBLIC_URL+ `/imagenes/kids1.png`} alt="img" />
        </div>
    </div>
    </div>
   <Car/>
 </>
    )
}
 export default Home;