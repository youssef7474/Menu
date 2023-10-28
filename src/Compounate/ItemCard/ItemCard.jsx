import React, { useState } from 'react';
import {  Card, Col, Row } from 'react-bootstrap';
import "./ItemCard.css"
import Zoom from 'react-reveal/Zoom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BiPhoneCall } from "react-icons/bi";
import {BsWhatsapp} from "react-icons/bs"

const ItemCard = ({Data}) => {

    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const openwhatsapp = () => {
    const url = 'https://wa.me/201020233296'; // Replace with your WhatsApp number
    window.open(url, '_blank');
  };


  return (
    <div>
    
    
    
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Oredr Now</Modal.Title>
    </Modal.Header>
    <Modal.Body onClick={openwhatsapp} style={{cursor:"pointer"}} >You can oredr now on WhatsApp  <BsWhatsapp style={{color:"green",fontSize:"22px"}}></BsWhatsapp> </Modal.Body>
    <a href="tel:01020233296" style={{textDecoration:"none"}}>
      <Modal.Body  style={{cursor:"pointer",color:"black"}} >You can oredr now by calling +201020233296  <BiPhoneCall style={{color:"green",fontSize:"22px"}}></BiPhoneCall> </Modal.Body>
    </a> 
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>




    <Row>

    {
        Data.length >=1?(

            Data.map((el)=>{
                return(
                
                    <Zoom>
                    <Col sm='12' className='mb-3' key={el.id}>
    

                    <Card className='mobileitem'>
                        <div  >
                            <img className='cardimg' variant="top" src={el.Itemimage} alt='p'></img>
                        </div>
                        <Card.Body>
                            <Card.Title>
                                <div style={{display:"flex" ,justifyContent:"space-between"}}>
                                    <div style={{color:"#b45b35",fontWeight:"bold"}}>
                                        {el.Titel}
                                    </div>
            
            
                                    <div style={{color:"green"}}>
                                       {el.price}
                                    </div>
                                </div>
                            </Card.Title>
                            <Card.Text>
                               <div style={{color:"gray"}}>
                                   {el.description}
                               </div>
                            </Card.Text>
                          
                                <div className='orderButtondiv'>
                                    <button className='orderButton' onClick={handleShow}>Order Now</button>
                                </div>
                           
                        </Card.Body>
                    </Card>
                
                
                </Col>
                    
                </Zoom>  
              

                )
            })

            


        ):<h1 className='text-center'>No items here</h1>
    }
    
   

    
    </Row>



    </div>
  );
}

export default ItemCard;
