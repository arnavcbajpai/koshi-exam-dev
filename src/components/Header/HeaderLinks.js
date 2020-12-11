/*eslint-disable*/
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
// react components for routing our app without refresh
import { Link, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'

// @material-ui/icons
import {
  Apps,
  ExitToApp,
  Instagram,
  Facebook,
  Twitter,
  PersonAdd
} from '@material-ui/icons'

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js'
import Button from 'components/CustomButtons/Button.js'

import styles from 'assets/jss/material-kit-react/components/headerLinksStyle.js'

const useStyles = makeStyles(styles)

export default function HeaderLinks(props) {
  const history = createBrowserHistory()
  const classes = useStyles()
  const auth = localStorage.getItem('auth')
  console.log('authauth', auth, 'props.page', props.page)
  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.setItem('auth', false)
    history.push('/landing-page')
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText='Components'
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to='/aboutus' className={classes.dropdownLink}>
              About Us
            </Link>,
            <Link to='/privacy' className={classes.dropdownLink}>
              Privacy
            </Link>,
            <Link to='/terms' className={classes.dropdownLink}>
              Terms
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        {auth ? (
          <Button
            onClick={handleLogout}
            color='transparent'
            target='_blank'
            className={classes.navLink}
          >
            <ExitToApp className={classes.icons} /> Sign Out
          </Button>
        ) : props.page === 'signin' ? (
          <Link
            to='/SignUp'
            color='transparent'
            target='_blank'
            className={classes.navLink}
          >
            <PersonAdd className={classes.icons} /> Sign Up
          </Link>
        ) : props.page === 'signup' ? (
          ''
        ) : (
          <Link
            to='/SignIn'
            color='transparent'
            target='_blank'
            className={classes.navLink}
          >
            <PersonAdd className={classes.icons} /> Sign In
          </Link>
        )}
        {/* { auth ? <Button 
                    onClick = {handleLogout}
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                  >
                    <ExitToApp className={classes.icons} /> Sign Out
              :  }*/}
      </ListItem>
      <ListItem className={classes.listItem}>
        {/* <Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip> */}
        <Tooltip
          id='instagram-twitter'
          title='Follow us on twitter'
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href='https://twitter.com/CreativeTim?ref=creativetim'
            target='_blank'
            className={classes.navLink}
            color='transparent'
          >
            <Twitter />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-facebook'
          title='Follow us on facebook'
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color='transparent'
            href='https://www.facebook.com/CreativeTim?ref=creativetim'
            target='_blank'
            className={classes.navLink}
          >
            <Facebook />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-tooltip'
          title='Follow us on instagram'
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href='https://www.instagram.com/CreativeTimOfficial?ref=creativetim'
            target='_blank'
            className={classes.navLink}
            color='transparent'
          >
            <Instagram className={classes.socialIcons} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  )
}
