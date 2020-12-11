import React, { useEffect, useState } from 'react'
import { DropzoneArea } from 'material-ui-dropzone'
import GridItem from 'components/Grid/GridItem.js'
import GridContainer from 'components/Grid/GridContainer.js'
import CustomInput from 'components/CustomInput/CustomInput.js'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import { makeStyles } from '@material-ui/core/styles'
// import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    color: 'rgb(210 210 210)'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))
export default function DropzoneAreaExample() {
  const [filesUploaded, setFilesUploaded] = useState([])
  const [previewImage, setPreviewImage] = useState('')
  const [answersKey, setAnswersKey] = useState({})
  const [openAnswerKeyForm, setOpenAnswerKeyForm] = useState(true)
  const classes = useStyles()
  const [state, setState] = useState({
    TimePeriod: 30,
    ExamSubject: '',
    TotalCount: ''
  })
  const handleSelect = (event) => {
    const name = event.target.name
    const value = event.target.value

    setState({
      ...state,
      [name]: name === 'TotalCount' ? parseInt(value) : value
    })
  }
  const handleAnswerKey = (event) => {
    const { name, value } = event.target
    answersKey === {}
      ? setAnswersKey({
          ...state,
          [name]: value
        })
      : setAnswersKey({
          ...answersKey,
          [name]: value
        })
  }

  const handleChange = (files) => {
    setFilesUploaded(files)
    const temp = files.length && URL.createObjectURL(files[0])
    localStorage.setItem('previewImage', temp)
    setPreviewImage(temp)
  }
  const handleCross = () => {
    setFilesUploaded([])
  }
  const handleSubmit = (event) => {
    //hit api
    console.log('files')
    //save answers
    event.target.name === 'answersKey' && console.log('answersKey', answersKey)
  }

  useEffect(() => {
    state.ExamSubject && state.TotalCount
      ? setOpenAnswerKeyForm(true)
      : setOpenAnswerKeyForm(false)
  }, [state])
  return (
    <>
      {!filesUploaded.length ? (
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={2}>
              <DropzoneArea onChange={handleChange} />
            </GridItem>
            <GridItem xs={12} sm={12} md={10}>
              <form>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText='Exam OR Subject'
                      id='ExamSubject'
                      name='ExamSubject'
                      value={state.ExamSubject}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onInput: handleSelect,
                        name: 'ExamSubject'
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText='Total Questions'
                      id='questions'
                      value={state.TotalCount}
                      inputProps={{
                        onInput: handleSelect,
                        name: 'TotalCount',
                        type: 'number'
                      }}
                      name='TotalCount'
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <div className={classes.formControl}>
                      <FormControl variant='outlined'>
                        <InputLabel>Time Period</InputLabel>
                        <Select
                          native
                          value={state.TimePeriod}
                          onChange={handleSelect}
                          label='Time Period'
                          inputProps={{
                            name: 'TimePeriod'
                          }}
                        >
                          <option value={30}> 30 minutes</option>
                          <option value={60}> 60 minutes</option>
                          <option value={90}> 90 minutes</option>
                          <option value={120}> 120 minutes</option>
                          <option value={150}> 150 minutes</option>
                          <option value={180}> 180 minutes</option>
                        </Select>
                      </FormControl>
                    </div>
                  </GridItem>
                </GridContainer>
                {openAnswerKeyForm && (
                  <GridItem direction='row'>
                    <form>
                      {[...Array(state.TotalCount)].map((value, index) => (
                        <>
                          {/* <CustomInput
                      labelText={"Q."+(index+1)}
                      id={state.ExamSubject+"Q."+(index+1)} 
                      key={state.ExamSubject+"Q."+(index+1)}
                      inputProps={{
                        onChange:handleAnswerKey,
                        name:state.ExamSubject+"Q."+(index+1)
                      }}                    
                  /> */}
                          <span style={{ padding: '5px' }}>
                            <FormControl variant='outlined'>
                              {/* <InputLabel >{"Q."+(index+1)}</InputLabel> */}
                              <span style={{ paddingLeft: '15px' }}>
                                {'Q.' + (index + 1)}
                              </span>
                              <Select
                                native
                                value={
                                  state[state.ExamSubject + ' Q' + (index + 1)]
                                }
                                onChange={handleAnswerKey}
                                label='Answer'
                                inputProps={{
                                  name: state.ExamSubject + ' Q' + (index + 1)
                                }}
                              >
                                <option value={1}> a </option>
                                <option value={2}> b </option>
                                <option value={3}> c </option>
                                <option value={4}> d </option>
                              </Select>
                            </FormControl>
                          </span>
                        </>
                      ))}
                    </form>
                    <button
                      style={{ margin: '10px' }}
                      name='answersKey'
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </GridItem>
                )}
              </form>
            </GridItem>
          </GridContainer>
        </div>
      ) : (
        <div>
          <button onClick={handleCross}> Cross</button>
          <button onClick={handleSubmit}>Submit</button>
          <img style={{ width: '100%' }} src={previewImage} alt='preview' />
        </div>
      )}
    </>
  )
}
