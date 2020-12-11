import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { Link, Redirect } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { auth } from '../firebase'
import DatePicker from '../Date/DatePicker'
import Footer from '../Footer/Footer'
import Header from 'components/Header/Header'
import HeaderLinks from 'components/Header/HeaderLinks.js'
import image from 'assets/img/bg4.jpg'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    paddingTop: '60px',
    padding: '5px',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'radial-gradient(rgb(255 255 255), #3f51b5)'
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2)
  }
}))

export default function SignUp() {
  // const emailRef = useRef();
  // const passwordRef = useRef();

  const classes = useStyles()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignedUp, setIsSignedUp] = useState(false)
  const [category, setCategory] = useState('')
  const [institution, setInstitution] = useState('')

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  const handleInstitution = (e) => {
    setInstitution(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSignUp = (e) => {
    e.preventDefault()

    console.log(
      'SUBMIT VALUES',
      firstName,
      lastName,
      email,
      password,
      category,
      institution
    )
    const promise = auth.createUserWithEmailAndPassword(email, password)
    promise
      .then((response) => {
        alert('Sign Up successful')
        setIsSignedUp(true)
      })
      .catch((e) => console.log(e.message))
  }

  return isSignedUp ? (
    <Redirect to='/homepage' />
  ) : (
    <div
      style={{
        backgroundImage: 'url(' + image + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'top center'
      }}
    >
      <Header
        color='#938888'
        brand='Exam Live'
        rightLinks={<HeaderLinks page='signup' />}
        fixed
      />
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Quick Sign Up
          </Typography>
          <form className={classes.form} onSubmit={handleSignUp} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='fname'
                  name='firstName'
                  variant='outlined'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  value={firstName}
                  onChange={handleFirstNameChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  autoComplete='lname'
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </Grid>
              <Grid item xs={12}>
                <DatePicker />
              </Grid>
              <Grid itemxs={12} sm={6}>
                <FormControl variant='outlined'>
                  <InputLabel>Category</InputLabel>
                  <Select
                    native
                    value={category}
                    onChange={handleCategory}
                    label='category'
                    inputProps={{
                      name: 'category'
                    }}
                  >
                    <option value={'Teacher'}> Teacher </option>
                    <option value={'Student'}> Student </option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl variant='outlined'>
                  <InputLabel>Institution</InputLabel>
                  <Select
                    native
                    value={institution}
                    onChange={handleInstitution}
                    label='institution'
                    inputProps={{
                      name: 'institution'
                    }}
                  >
                    <option value={'ExamLive'}> Exam Live </option>
                    <option value={'Others'}> Others </option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  value={email}
                  onChange={handleEmailChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value='allowExtraEmails' />}
                  label='I want to receive updates via email.'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify='center'>
              <Grid item>
                <Link to='/signin' style={{ color: '#e3e3ec' }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      <Footer />
    </div>
  )
}
