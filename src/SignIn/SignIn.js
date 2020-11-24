import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Redirect, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { auth, googleProvider, facebookProvider } from "../firebase";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import Footer from "Footer/Footer";
// import Header from "../Header/Header";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleGoogleSignIn = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        setIsLoggedIn(true);
      })
      .catch((e) => console.log(e.message));
  };

  const handleFacebookSignIn = () => {
    auth
      .signInWithPopup(facebookProvider)
      .then((res) => {
        setIsLoggedIn(true);
      })
      .catch((e) => console.log(e.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("INFORMATION SUBMITTED WAS", email, password);
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise
      .then((response) => {
        console.log("USER DATA", response);
        setIsLoggedIn(true);
      })
      .catch((e) => console.log(e.message));
  };
  return isLoggedIn ? (
    <Redirect to="/homepage" />
  ) : (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleEmailChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePasswordChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "center",
              margin: " 20px 0",
            }}
          >
            <Button
              variant="outlined"
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
              display: "flex",
              justifyContent: "center",
              margin: " 20px 0",
            }}
          >
            <Button
              variant="outlined"
              className={classes.button}
              startIcon={<AiFillFacebook />}
              onClick={() => alert("Coming Soon!")}
            >
              Sign In With Facebook
            </Button>
          </Grid>
        </form>
      </div>
      <Footer />
    </Container>
  );
}
