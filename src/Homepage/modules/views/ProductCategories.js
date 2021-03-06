import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';


const styles = (theme) => ({
  root: {
    color:'black',
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
       title: 'SSC CGL',
      width: '40%',
    },
    {
      title: 'NDA',
      width: '20%',
    },
    {
      title: 'UPSC',
      width: '40%',
    },
    {
      title: 'UPTU',
      width: '23%',
    },
    {
      title: 'CDS',
      width: '29%',
    },
    {
      title: 'NEET',
      width: '24%',
    },
    {
      title: 'JEE',
      width: '24%',
    },
    {
      title: 'TISSNET',
      width: '40%',
    },
    {
      title: 'TET',
      width: '20%',
    },
    {
      title: 'CAT',
      width: '40%',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        FOR ALL KIND EXAMS, WITH LATEST PATTERNS
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (

          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
              border: '2px white' 
            }}
          >
            <ImportContactsIcon/>
            <div
              className={classes.imageSrc}
              style={{
                background: 'radial-gradient(rgb(2 0 146), transparent)'
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
