import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { Subscriptions, LibraryBooks } from "@material-ui/icons";

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(5),
    display: 'flex',
    position: 'relative',
    paddingBottom: '25px'
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <Subscriptions/>
              <Typography variant="h6" className={classes.title}>
                Subscriptions
              </Typography>
              <Typography variant="h5">
                {'Available faculties'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <TrendingUpIcon/>
              <Typography variant="h6" className={classes.title}>
                Results Analysis
              </Typography>
              <Typography variant="h5">
                {'Check your progress and your scores'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <LibraryBooks/>
              <Typography variant="h6" className={classes.title}>
                Upcoming Exams
              </Typography>
              <Typography variant="h5">
                {'Check if they intrest you'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
