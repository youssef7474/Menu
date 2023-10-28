import React from 'react';
import NavBar from '../Compounate/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const RootLayOut = () => {
   
  return (
    <div className='color-body' >
        <NavBar ></NavBar>
        <Outlet></Outlet>
    </div>
  );
}

export default RootLayOut;
