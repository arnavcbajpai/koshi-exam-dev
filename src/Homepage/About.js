import withRoot from 'Homepage/modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'; 
import Typography from './modules/components/Typography';

import classNames from "classnames";
import Footer from "../Footer/Footer";

import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks.js";

// Sections for this page
import Institutions from "views/LandingPage/Sections/Institutions.js";
import Teachers from "views/LandingPage/Sections/Teachers.js";
import Student from "views/LandingPage/Sections/Student.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/about.js";
const useStyles = makeStyles(styles);

function AboutUs() {
  const classes = useStyles();

  return (
    <React.Fragment>
       <Header
          color="#938888" 
          brand="Exam Live"
          rightLinks={<HeaderLinks />}
          fixed 
        />
      <Container>
        <Box mt={7} mb={12}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            About Us
          </Typography>
        </Box>
        <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Institutions />
          <Teachers />
          <Student />
        </div>
      </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(AboutUs);
