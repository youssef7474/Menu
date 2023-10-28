import React from 'react';
import "./Landing.css"
import { useNavigate } from 'react-router-dom';
const Landing = () => {
    const navigate=useNavigate()
    const menuNavigate=()=>{
        navigate("/Menu")
    }


//    <h3 className='mb-4' style={{fontSize:"32px"}}>All YOU Need And More</h3>

  return (
    <div>
      

    <div class="background-svg ">


    <div className='container m-auto text-white '>
    
        <div className=' ml-20  '>

          


            <div className='pt-40 text-landing' >
                <span class="loader">All YOU Need And More</span>
                <button className='orderButton' onClick={menuNavigate} >Order Now</button>
            </div>


        
        </div>
    
    </div>


</div>



    </div>
  );
}

export default Landing;
