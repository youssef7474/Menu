import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavBar from './Compounate/NavBar/NavBar.jsx';
import HeaderTitle from './Compounate/HeaderTitle/HeaderTitle.jsx';
import ButtonCat from './Compounate/ButtonCat/ButtonCat.jsx';
import ItemCard from './Compounate/ItemCard/ItemCard.jsx';
import {ItemDataMenu} from "./Data/ItemData"
import { Outlet } from 'react-router-dom';
import {filterSearch} from "./Data/ItemData"




const App = () => {
  const [Data,setData]=useState(ItemDataMenu)


  const allcat=['All',...new Set(ItemDataMenu.map((el)=>el.catigory))]

  // const filterSearch=(word)=>{

  //   if(word!==''){
  //     const newArray=ItemDataMenu.filter((el)=>el.Titel===word)
  //     setData(newArray)
  //   }
  // }




  const fiterByCatigory = (cat)=>{
    if(cat==='All'){
      setData(ItemDataMenu)
    }else{
      const newArray=ItemDataMenu.filter((el)=>el.catigory=== cat)
      setData(newArray)
    }

  }
  // <HeaderTitle></HeaderTitle>
  // <ButtonCat fiterByCatigory={fiterByCatigory} allcat={allcat}></ButtonCat>
  // <ItemCard Data={Data}></ItemCard>
//    <NavBar filterSearch={filterSearch}></NavBar>
  return (
    <div className='color-body' >

    <Container>
      <HeaderTitle></HeaderTitle>
      <ButtonCat fiterByCatigory={fiterByCatigory} allcat={allcat}></ButtonCat>
      <ItemCard Data={Data}></ItemCard>
    </Container>
    </div>
  );
}

export default App;
