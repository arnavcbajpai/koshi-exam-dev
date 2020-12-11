import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { MenuBook, Face } from '@material-ui/icons'
import Chat from '@material-ui/icons/Chat'
import Typography from 'components/Typography'
import ProductHeroLayout from './ProductHeroLayout'
import CustomTabs from 'components/CustomTabs/CustomTabs.js'
import { Link } from 'react-router-dom'
import ExamList from './Exam'
import ProfilePage from './Profile.js'

const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80'

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center'
  },
  button: {
    minWidth: 200
  },
  title: {
    textDecoration: 'none',
    lineHeight: '30px',
    fontSize: '18px',
    borderRadius: '3px',
    textTransform: 'none',
    color: 'inherit',
    padding: '8px 16px',
    background: '#ff3366',
    letterSpacing: 'unset',
    '&:hover,&:focus': {
      color: 'inherit'
    }
  },
  h5: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(1)
    }
  },
  more: {
    marginTop: theme.spacing(2)
  }
})

function ProductHero(props) {
  const { classes } = props

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      <Typography color='inherit' align='center' variant='h2' marked='center'>
        Lets prepare for your Future
      </Typography>
      <Typography
        color='inherit'
        align='center'
        variant='h5'
        className={classes.h5}
      >
        Get the guidance of the Most credible Faculties...
      </Typography>
      <Typography
        color='inherit'
        align='center'
        variant='h5'
        className={classes.h5}
      >
        Be the Part of most successful Instituions...
      </Typography>
      <Link className={classes.title} to='/Student/AttemptExam'>
        Resume...
      </Link>
      <Typography variant='body2' color='inherit' className={classes.more}>
        continue from where you left
      </Typography>

      <CustomTabs
        headerColor='primary'
        tabs={[
          {
            tabName: 'Exams',
            tabIcon: MenuBook,
            tabContent: (
              <>
                <ExamList />
              </>
            )
          },
          // {
          //   tabName: "Upload Files",
          //   tabIcon: CloudUpload,
          //   tabContent: (
          //   <div style={{width:'100%', height:'100%'}}>
          //     <GridContainer>
          //       <GridItem xs={12} sm={12} md={6}>
          //       <DropzoneDialogExample/>
          //       </GridItem>
          //       <GridItem xs={12} sm={12} md={6}>
          //       <DropzoneDialogTemp/>
          //       </GridItem>
          //     </GridContainer>
          //   </div> )
          // },
          {
            tabName: 'Profile',
            tabIcon: Face,
            tabContent: <ProfilePage />
          },
          {
            tabName: 'Messages',
            tabIcon: Chat,
            tabContent: (
              <p className={classes.textCenter}>Feature Coming Soon.</p>
            )
          }
        ]}
      />
    </ProductHeroLayout>
  )
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProductHero)
