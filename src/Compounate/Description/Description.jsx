import React from 'react';
import pic1 from "../../assets/chif1.jpg"
import "./Description.css"
const Description = () => {
  return (
    <div style={{marginTop:"20px"}}>
      <div style={{display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center"}}>
        <img src={pic1} alt=''  className='imagedesc'></img>
        <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </div>

    </div>
  );
}

export default Description;
