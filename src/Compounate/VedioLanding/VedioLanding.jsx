import React from 'react';
import "./Vedio.css"
import food from "../../assets/pasta_-_33256 (540p).mp4"
const VedioLanding = () => {
  return (
    <div className='vediopading'>
        <div>
            <div class="vedio">
                <video src={food} autoPlay={true} loop muted></video>
                <div class="text">
                    <h1 style={{color:"#b45b35",zIndex:"100"}} >ALL You Want And More</h1>
                </div>
            </div>
        </div>
    </div>
  );
}

export default VedioLanding;
