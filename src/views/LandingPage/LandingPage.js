import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import ProductSmokingHero from 'Homepage/modules/views/ProductSmokingHero';
import ProductCTA from 'Homepage/modules/views/ProductCTA';

import ProductCategories from 'Homepage/modules/views/ProductCategories';
import ProductHowItWorks from 'Homepage/modules/views/ProductHowItWorks';

// core components
import Header from "components/Header/Header.js";
import Footer from "Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import SectionCarousel from "./SectionCarousel.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div>
      <Header
        color="#938888"
        routes={dashboardRoutes}
        brand="Exam Live"
        rightLinks={<HeaderLinks />}
        page="guest"
        fixed
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
           <SectionCarousel />
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductCategories />
          <ProductHowItWorks />
          <ProductCTA />
          <ProductSmokingHero />
        </div>
      </div>
      <Footer />
    </div>
  );
}
