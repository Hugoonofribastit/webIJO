import React from 'react'
import Main from '../../Components/Main/Main'; 
import StackedExample from '../../Components/SideBar/SideBar';





const Home = () =>{
    
return(
<>
    <Main/>
    <div className='d-flex'>
        <StackedExample/>
        <div className='imgside d-flex'>
           <img className="image_side" src={process.env.PUBLIC_URL+ `/imagenes/kids1.png`} alt="img" />
        </div>
    </div>
   
 </>
    )
}
 export default Home;