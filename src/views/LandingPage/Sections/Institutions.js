import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SchoolOutlined from "@material-ui/icons/SchoolOutlined";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function Institutions() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Understanding our functionality</h2>
          <h5 className={classes.description}>
            This is the place where you can attend classes from different faculties
            that also from various institutions, all as per your need.
            Keep yourself engaged by attempting different levels of exam, that will
            help you to determine your strength and weakness. Remember that by this 
            time, students all over the nation are your competitors.
            There are limited opportunities, but you should focus on your goal, and we 
            will support you in your journey to succcess
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Best Instituions"
              description="You get to choose among the best available institutions"
              icon={SchoolOutlined}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Top Faculties"
              description="You don't need to accept any random mentor but to select from the top"
              icon={SchoolOutlined}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Study Materials"
              description="Want to read from notes, this is the place for you, we would be providing online resources for preparation as well."
              icon={SchoolOutlined}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
