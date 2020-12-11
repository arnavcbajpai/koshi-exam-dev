import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { Redirect, Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { auth, googleProvider } from '../firebase' //import facebookProvider
import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'
import Footer from '../Footer/Footer'
import Header from 'components/Header/Header'
import HeaderLinks from 'components/Header/HeaderLinks.js'
import image from 'assets/img/bg7.jpg'

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  pageHeader: {
    minHeight: '9vh',
    height: 'auto',
    display: 'inherit',
    position: 'relative',
    margin: '0',
    padding: '0',
    border: '0',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export default function SignIn() {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleGoogleSignIn = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        setIsLoggedIn(true)
        localStorage.setItem('auth', true)
      })
      .catch((e) => {
        console.log(e.message)
        localStorage.setItem('auth', false)
      })
  }

  // const handleFacebookSignIn = () => {
  //   auth
  //     .signInWithPopup(facebookProvider)
  //     .then((res) => {
  //       setIsLoggedIn(true);
  //       localStorage.setItem('auth',true)
  //     })
  //     .catch((e) => {console.log(e.message)
  //       localStorage.setItem('auth',false)});
  // };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('INFORMATION SUBMITTED WAS', email, password)
    const promise = auth.signInWithEmailAndPassword(email, password)
    promise
      .then((response) => {
        console.log('USER DATA', response)
        setIsLoggedIn(true)
        localStorage.setItem('auth', true)
      })
      .catch((e) => {
        console.log(e.message)
        localStorage.setItem('auth', false)
      })
  }
  return isLoggedIn ? (
    <Redirect to='/user-page' />
  ) : (
    <div
      style={{
        backgroundImage: 'url(' + image + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'top center'
      }}
    >
      <div className={classes.pageHeader}>
        <Header
          color='#938888'
          brand='Exam Live'
          rightLinks={<HeaderLinks page='signin' />}
          fixed
        />
      </div>

      <Container
        component='main'
        maxWidth='xs'
        style={{
          marginBottom: '4px',
          background: 'radial-gradient(#d8d2d2, rgb(119 107 107))'
        }}
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={handleEmailChange}
              background='white'
              border='none'
              borderRadius=' 42px'
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={handlePasswordChange}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to='/'>Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link to='/signup'>{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
            <Grid
              container
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: ' 20px 0'
              }}
            >
              <Button
                variant='outlined'
                className={classes.button}
                startIcon={<FcGoogle />}
                onClick={handleGoogleSignIn}
              >
                Sign In With Google
              </Button>
            </Grid>
            <Grid
              container
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: ' 20px 0'
              }}
            >
              <Button
                variant='outlined'
                className={classes.button}
                startIcon={<AiFillFacebook />}
                onClick={() => alert('Coming Soon!')}
              >
                Sign In With Facebook
              </Button>
            </Grid>
          </form>
        </div>
      </Container>

      <Footer />
    </div>
  )
}
