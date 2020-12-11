import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LandingPage from './views/LandingPage/LandingPage.js'
import LoginPage from './views/LoginPage/LoginPage.js'

import HomepageTest from './Homepage/HomePage'
import Privacy from './Homepage/Privacy'
import AboutUs from './Homepage/About'
import Terms from './Homepage/Terms'

import SignUp from './Auth/SignUp'
import SignIn from './Auth/SignIn'
import Profile from './Auth/Profile'

import SampleExams from './Institution/Exam'
import Teacher from './Institution/Teacher'
import Student from './Institution/Student'
import HomeInstitution from './Institution/HomeInstitution'

import Exams from './Teacher/Exam'
import Students from './Teacher/Students'
import HomeTeacher from './Teacher/HomeTeacher'

import Exam from './Student/Exam'
import AttemptExam from './Student/AttemptExam'
import HomeStudent from './Student/HomeStudent'
import DropzoneDialogExample from 'Student/UploadFiles.js'

import TotalInstitution from './SuperAdmin/TotalInstitution'
import TotalTeacher from './SuperAdmin/TotalTeacher'
import TotalStudent from './SuperAdmin/TotalStudent'
import HomeAdmin from './SuperAdmin/HomeAdmin'

const routes = () => {
  return (
    <Switch>
      <Route path='/HomeAdmin' component={HomeAdmin} />
      <Route path='/HomeStudent' component={HomeStudent} />
      <Route path='/HomeTeacher' component={HomeTeacher} />
      <Route path='/HomeInstitution' component={HomeInstitution} />
      <Route path='/DropzoneDialogExample' component={DropzoneDialogExample} />
      <Route path='/aboutus' component={AboutUs} />
      <Route path='/landing-page' component={LandingPage} />
      <Route path='/user-page' component={HomepageTest} />
      <Route path='/login-page' component={LoginPage} />
      <Route path='/Privacy' component={Privacy} />
      <Route path='/Terms' component={Terms} />
      <Route path='/Signup' component={SignUp} />
      <Route path='/SignIn' component={SignIn} />
      <Route path='/Profile' component={Profile} />
      <Route path='/Student/Exam' component={Exam} />
      <Route path='/Student/AttemptExam' component={AttemptExam} />
      <Route path='/Teacher/Exam' component={Exams} />
      <Route path='/Teacher/Students' component={Students} />
      <Route path='/Institution/Exam' component={SampleExams} />
      <Route path='/Institution/Teacher' component={Teacher} />
      <Route path='/Institution/Student' component={Student} />
      <Route path='/SuperAdmin/TotalInstitution' component={TotalInstitution} />
      <Route path='/SuperAdmin/TotalTeacher' component={TotalTeacher} />
      <Route path='/SuperAdmin/TotalStudent' component={TotalStudent} />
      <Route path='/' component={LandingPage} />
    </Switch>
  )
}

export default routes
