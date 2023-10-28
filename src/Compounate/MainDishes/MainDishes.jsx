import React from 'react';
import "./MainDishes.css"
import imagedish from "../../assets/Breakfast Sausage.jpeg"

import Card from 'react-bootstrap/Card';

import {ItemDataMenu} from "../../Data/ItemData.js"
import ModalCompo from '../ModalCompo/ModalCompo';


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useEffect } from 'react';


import { BiPhoneCall } from "react-icons/bi";
import {BsWhatsapp} from "react-icons/bs"
const MainDishes = () => {

  //const selectedItems = ItemDataMenu.slice(0, 3)

  const [selectedItems, setSelectedItems] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const randomItems = getRandomItems();
    setSelectedItems(randomItems);
  }, []);

  const getRandomItems = () => {
    const shuffledItems = [...ItemDataMenu].sort(() => 0.5 - Math.random());
    return shuffledItems.slice(0, 3);
  };

  

  const data=selectedItems.map(el=>{
    return(
      <div className='hovercarditem'>
      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={el.Itemimage} style={{height:"200px"}} />
      <Card.Body>
        <Card.Title>{el.Titel}</Card.Title>
        <Card.Text>
          {el.description}
        </Card.Text>

        <div style={{color:"green",marginBottom:"20px"}} >
          {el.price}
        </div>

        <button className='orderButton' onClick={handleShow}  >Order Now</button>
        </Card.Body>
      </Card>
    </div>
      )
  })





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


    
    <div className='my-5' >
      <h1  style={{display:"flex",justifyContent:"center"}} >Suggestions</h1>
      <div style={{display:"flex",justifyContent:"center"}}>
        <p className='underline'  ></p>
      </div>
    </div>

    <div style={{marginTop:"40px"}} className='gridBox'>
    
{data}



  </div>
    
    </div>

  );
}

export default MainDishes;
