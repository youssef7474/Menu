import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css"
import logo from "../../assets/Chef-restaurant-logo-illustrations-template-on-transparent-background-PNG.png"
//import {filterSearch} from "../../Data/ItemData.js"
import {NavLink} from "react-router-dom"
const NavBar = () => {


//   <NavDropdown title="Link" id="navbarScrollingDropdown">
//   <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//   <NavDropdown.Item href="#action4">
//     Another action
//   </NavDropdown.Item>
//   <NavDropdown.Divider />
//   <NavDropdown.Item href="#action5">
//     Something else here
//   </NavDropdown.Item>
// </NavDropdown>


//const [SearchWord,setSearchWord]=useState('')



// const onsearchword=(e)=>{
//   e.preventDefault();
//   const datafiltered =filterSearch(SearchWord)
//   setSearchWord('')
// }



// <Form className="d-flex"  >
// <Form.Control
//   type="text"
//   placeholder="Search"
//   className="me-2"
//   aria-label="Search"
//   onChange={(e)=>setSearchWord(e.target.value)}
//   value={SearchWord}
// />
// <Button variant="outline-success"  >Search</Button>
// </Form>

  return (




    <div>
      


    <Navbar expand="lg" className="bg-body-tertiary ">
    <Container >
      <Navbar.Brand>
        <NavLink to="/">
          <img style={{height:"70px" ,borderRadius:"50%"}} src={logo} alt='p'></img>
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
         

         


     


        </Nav>
      
        <div className='mobilev' style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"20px"}}>



        <Nav.Link href="#action1" style={{fontWeight:"bold"}}>
          <NavLink className='NavDiv' to="/" style={{textDecoration:"none",color:"black"}} >Home</NavLink>
        </Nav.Link>

       
    
       
        <Nav.Link href="#action1" style={{fontWeight:"bold"}}>
        <NavLink className='NavDiv' to="/Menu" style={{textDecoration:"none",color:"black"}} >Menu</NavLink>
        </Nav.Link>


        </div>
        


      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  );
}

export default NavBar;




