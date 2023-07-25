import React from 'react'
import Main from '../../Components/Main/Main'; 
import StackedExample from '../../Components/SideBar/SideBar';
import Car from '../../Components/carouselmain/carouselmain';




const Home = () =>{
    
return(
<>
<div className='borderbottom'>
    <Main/>
    
    <div className='d-flex'>
        <StackedExample/>
        <div className='imgside d-flex'>
           <img className="image_side" src={process.env.PUBLIC_URL+ `/imagenes/kids1.png`} alt="img" />
        </div>
    </div>
    </div>
   <Car/>
 </>
    )
}
 export default Home;