import React, { useState } from 'react';
import {  Col, Row } from 'react-bootstrap';
import "./ButtonCat.css"
const ButtonCat = ({fiterByCatigory,allcat}) => {


  const onfilter=(cat)=>{
    fiterByCatigory(cat)
    setSelectedCategory(cat); 
  }

  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div>
        <Row className='my-2 mb-5'>
        
            <Col sm='12' >
            
                <div  className='flexBoxButton' >
   
                
                {
                  allcat.length>=1?(
                    allcat.map((el)=>{
                      return(
                        <button onClick={()=>onfilter(el)}   className={`mx-2 btn-cat ${selectedCategory === el ? 'selected' : ''}`} >{el}</button>
                      )
                    })

                  ):<h1 className='text-center'>Nothing found</h1>

                }

                    

                    
                </div>
            
            </Col>
        
        </Row>
    </div>
  );
}

export default ButtonCat;
