import withRoot from 'Homepage/modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Container from "@material-ui/core/Container";
import ProductHero from './ProductHero'
import ProductSmokingHero from 'Homepage/modules/views/ProductSmokingHero';

import Footer from "../Footer/Footer";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks.js";

function HomePageTest() {
  return (
    <React.Fragment>
      <Header
          color="#938888" 
          brand="Exam Live"
          rightLinks={<HeaderLinks/>}                    
          fixed 
        />
         <Container component="main" 
          style={{
            marginBottom: '4px',
            marginTop: '40px',
            background: 'radial-gradient(#d8d2d2, rgb(119 107 107))'
            }}       
         >
      <ProductHero />      
      </Container>
      <ProductSmokingHero />
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(HomePageTest);

