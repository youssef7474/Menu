import React from 'react';
import { Container } from 'react-bootstrap';
import VedioLanding from '../Compounate/VedioLanding/VedioLanding';
import SwiperFood from '../Compounate/SwiperFood/SwiperFood';
import Landing from '../Compounate/Landing/Landing';
import Description from '../Compounate/Description/Description';
import MainDishes from '../Compounate/MainDishes/MainDishes';

const HomePage = () => {
  return (
    <div style={{minHeight:"100vh",marginBottom:"50px"}}  >
      <Landing></Landing>
      <Container>
        <MainDishes></MainDishes>
      </Container>
    </div>
  );
}

export default HomePage;
