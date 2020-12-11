import React, { useState, useEffect } from 'react'
import Divider from '@material-ui/core/Divider'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import Container from '@material-ui/core/Container'
import quiz from './Jsoncopy'
import Footer from '../Footer/Footer'
import Header from 'components/Header/Header'
import HeaderLinks from 'components/Header/HeaderLinks.js'
import Timer from './Timer.js'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import styles from 'assets/jss/material-kit-react/views/landingPage.js'
import GridItem from 'components/Grid/GridItem.js'
import GridContainer from 'components/Grid/GridContainer.js'

import { withStyles, makeStyles } from '@material-ui/core/styles'
const temp = localStorage.getItem('previewImage')
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />
})

const useStyles = makeStyles(styles)

function ExamList({ isLoadingComplete, timerValue }) {
  const classes = useStyles()
  const history = useHistory()
  const [classicModal, setClassicModal] = useState(false)
  const [classicModalResults, setClassicModalResults] = useState(false)

  const [state, setState] = useState({})
  const [omrSheet, setOmrSheet] = useState({})
  const [result, setResult] = useState('')
  const [marks, setMarks] = useState('')
  const choiceOMR = ['a', 'b', 'c', 'd']

  const [closeTimer, setTimerClose] = useState(false)
  const [exiting, setExiting] = useState(false)
  const [currentTimerValue, setCurrentTimerValue] = useState(6)
  const setTimerValue = (value) => {
    if (value > 0) {
      setCurrentTimerValue(value)
    }
  }
  // const updateTransactionTimedOut = () => {    
  //   history.push({
  //     pathname: '/Student/Exam'
  //   })
  // }
  const handleResult = () => {
    setTimerClose(true)
    setClassicModal(false)
    let count = 0
    const resultTemp = quiz.quiz.sport.map((data, index) => {
      if (data.answer === state['Q' + (index + 1)]) {
        count = count + 1
      }
      const temp = {
        ...data,
        selected: state['Q' + (index + 1)]
          ? state['Q' + (index + 1)]
          : 'Unattempted'
      }
      return temp
    })
    setClassicModalResults(true)
    setResult(resultTemp)
    setMarks(count)
  }
  const handleExam = () => {
    console.log('wwwwwhandleExamwww')
    history.push('/Student/Exam')
  }
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }
  const handleResultOMR = () => {
    console.log('still')
    // setTimerClose(true)
    // setClassicModal(false)
    // let count = 0
    // const resultTemp = quiz.quiz.sport.map((data, index) => {
    //   if (data.answer === state['Q' + (index + 1)]) {
    //     count = count + 1
    //   }
    //   const temp = {
    //     ...data,
    //     selected: state['Q' + (index + 1)]
    //       ? state['Q' + (index + 1)]
    //       : 'Unattempted'
    //   }
    //   return temp
    // })
    // setClassicModalResults(true)
    // setResult(resultTemp)
    // setMarks(count)
  }
  const handleOMR = (event) => {
    setOmrSheet({
      ...omrSheet,
      [event.target.name]: event.target.value
    })
  }
  useEffect(() => {
    if (closeTimer) {
      !classicModalResults && setClassicModal(true)
    } // eslint-disable-next-line
  }, [closeTimer])
  const setTimerCloseFlag = (e) => {
    if (e === 'exit') {
      setExiting(true)
      setClassicModal(true)
    } else {
      setTimerClose(e)
      setExiting(false)
    }
  }
  return (
    <React.Fragment>
      <Header
        color='#938888'
        brand='Exam Live'
        rightLinks={<HeaderLinks />}
        fixed
      />
      {currentTimerValue > 0 && (
        <React.Fragment>
          <div style={{ marginTop: '40px', width: '85px' }} isHidden={false}>
            <Timer
              seconds={currentTimerValue}
              closeTimer={setTimerCloseFlag}
              setTimerValue={setTimerValue}
            />
          </div>
          {closeTimer && (
            <Dialog
              classes={{
                root: classes.center,
                paper: classes.modal
              }}
              open={classicModal}
              TransitionComponent={Transition}
              // keepMounted
              aria-labelledby='classic-modal-slide-title'
              aria-describedby='classic-modal-slide-description'
            >
              <DialogContent
                id='classic-modal-slide-description'
                className={classes.modalBody}
              >
                <h4>Oops !! Time Up !!'</h4>
              </DialogContent>
              <DialogActions className={classes.modalFooter}>
                <Button color='primary' onClick={handleExam}>
                  Go To Exam List
                </Button>
                {/* <Button onClick={temp ? handleResultOMR : handleResult} color='danger' simple> */}
                <Button onClick={handleResult} color='danger' simple>
                  Go To Results
                </Button>
              </DialogActions>
            </Dialog>
          )}
        </React.Fragment>
      )}
      {exiting && (
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={classicModal}
          TransitionComponent={Transition}
          // keepMounted
          aria-labelledby='classic-modal-slide-title'
          aria-describedby='classic-modal-slide-description'
        >
          <DialogContent
            id='classic-modal-slide-description'
            className={classes.modalBody}
          >
            <h4>Are You Sure you want to exit ?</h4>
          </DialogContent>
          <DialogActions className={classes.modalFooter}>
            <Button color='primary' onClick={setTimerClose(true)}>
              Confirm
            </Button>
            <Button onClick={setClassicModal(false)} color='danger' simple>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      )}
      {result && (
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={classicModalResults}
          TransitionComponent={Transition}
          keepMounted
          aria-labelledby='classic-modal-slide-title'
          aria-describedby='classic-modal-slide-description'
        >
          <DialogContent
            id='classic-modal-slide-description'
            className={classes.modalBody}
          >
            <h4>Marks : {marks}</h4>
            <Container
              component='main'
              style={{
                overflowY: 'scroll',
                maxHeight: '100px',
                color: 'white!important',
                paddingTop: '5px'
              }}
            >
              {result.map((data, index) => {
                return (
                  <div>
                    <FormControl component='fieldset'>
                      <GridContainer>
                        <GridItem xs={2} sm={2} md={2}>
                          {index + 1}
                          {'. '}
                        </GridItem>
                        <GridItem
                          xs={5}
                          sm={5}
                          md={5}
                          style={{ color: 'green' }}
                        >
                          {data.answer}
                        </GridItem>
                        <GridItem
                          xs={5}
                          sm={5}
                          md={5}
                          style={{
                            color:
                              data.answer !== data.selected ? 'red' : 'green'
                          }}
                        >
                          {data.selected}
                        </GridItem>
                      </GridContainer>
                    </FormControl>
                  </div>
                )
              })}
            </Container>
          </DialogContent>
          <DialogActions
            style={{ justifyContent: 'center', background: '#f5dddd' }}
            // className={classes.modalFooter}
          >
            <Button color='primary' onClick={handleExam}>
              Go To Exam List
            </Button>
          </DialogActions>
        </Dialog>
      )}
      <Container
        component='main'
        style={{
          overflowY: 'scroll',
          maxHeight: '567px',
          color: 'white!important',
          marginBottom: '4px',
          paddingTop: '45px',
          background: 'white'
        }}
      >
        {temp ? (
          <GridContainer>
            <GridItem xs={12} sm={7} md={9}>
              <img style={{ width: '100%' }} src={temp} alt='preview' />
            </GridItem>
            <GridItem xs={12} sm={5} md={3}>
              <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '14%', marginLeft: '1%' }}>a</div>
                <div style={{ marginRight: '14%' }}>b</div>
                <div style={{ marginRight: '13%' }}>c</div>
                <div>d</div>
              </div>
              {quiz.quiz.sport.map((data, index) => {
                return (
                  <div>
                    <FormControl component='fieldset'>
                      <RadioGroup
                        row
                        aria-label={index + 1}
                        name={'Q' + (index + 1)}
                        value={state['Q' + (index + 1)]}
                        onChange={handleOMR}
                      >
                        {choiceOMR.map((choice, index) => {
                          return (
                            <FormControlLabel
                              value={choice}
                              control={<Radio />}
                            />
                          )
                        })}
                      </RadioGroup>
                    </FormControl>
                  </div>
                )
              })}
            </GridItem>
          </GridContainer>
        ) : (
          quiz.quiz.sport.map((data, index) => {
            return (
              <div>
                <FormControl component='fieldset'>
                  <FormLabel component='legend'>
                    {index + 1}
                    {'. '}
                    {data.question}
                  </FormLabel>
                  <RadioGroup
                    aria-label={index + 1}
                    name={'Q' + (index + 1)}
                    value={state['Q' + (index + 1)]}
                    onChange={handleChange}
                  >
                    {data.options.map((choice, subIndex) => {
                      return (
                        <FormControlLabel
                          value={choice}
                          control={<Radio />}
                          label={choice}
                        />
                      )
                    })}
                  </RadioGroup>
                </FormControl>
                <Divider variant='inset' />
              </div>
            )
          })
        )}
      </Container>
      <>
        <button
          style={{
            bottom: '28px',
            marginLeft: '48%',
            position: 'relative'
          }}
          onClick={handleResult}
        >
          Submit
        </button>
      </>
      <Footer />
    </React.Fragment>
  )
}
export default withStyles(styles)(ExamList)
