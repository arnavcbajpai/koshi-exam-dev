import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {PeopleOutline, LocalLibrary, MenuBook } from "@material-ui/icons";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import CustomTabs from "components/CustomTabs/CustomTabs.js";


const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(1),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Lets prepare for your Future
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Get the guidance of the Most credible Faculties...
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Be the Part of most successful Instituions...
      </Typography>
     
      <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Faculties",
                    tabIcon: PeopleOutline,
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have the nucleus.
                      </p>
                    )
                  },
                  {
                    tabName: "Students",
                    tabIcon: LocalLibrary,
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have the nucleus.
                      </p>
                    )
                  },
                  {
                    tabName: "Exams",
                    tabIcon: MenuBook,
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have the nucleus.
                      </p>
                    )
                  },
                  {
                    tabName: "Messages",
                    tabIcon: Chat,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Feature Coming Soon.
                      </p>)
                  },
                  {
                    tabName: "Settings",
                    tabIcon: Build,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Feature Coming Soon.
                      </p>)
                  }
                ]}
              />
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
