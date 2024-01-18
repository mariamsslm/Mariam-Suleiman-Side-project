import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Meme from '../pages/Meme.js'
import  MemeContainer from '../pages/Home.js'
import LayoutWithHeaderFooter from './WithApp.js'
import LayoutWithoutHeaderFooter from './WithouApp.js'
import LoginPage from '../pages/login.js'
import ProtectedRoute from './protectedRoute.js'
import NotFound from '../pages/NotFound.js'
import SignupPage from '../pages/Signup.js'
import NotAuthorizate from '../pages/NotAuthorizete.js'
import MemeDashboard from '../pages/das.js'
import CreateMeme  from '../pages/dashboard/CreateMeme.js'
import UpdateMeme from '../pages/dashboard/UpdateMeme.js'

export default function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={
          <LayoutWithHeaderFooter>< MemeContainer/></LayoutWithHeaderFooter> }/>

        <Route path="/meme/:id" element={
        <LayoutWithHeaderFooter><Meme/></LayoutWithHeaderFooter>} />

         <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                <Route path="/dashboard" element={'Dashboard'} />
            </Route>
            <Route path='/CreateMeme' element={<CreateMeme/>}></Route>
            <Route path='/UpdateMeme' element={<UpdateMeme/>}></Route>


        <Route path='/login' element={
          <LayoutWithoutHeaderFooter><LoginPage/></LayoutWithoutHeaderFooter>
       }/>
       <Route path='/d' element={
          <LayoutWithoutHeaderFooter><MemeDashboard/></LayoutWithoutHeaderFooter>
       }/>
       <Route path='/signup' element={
          <LayoutWithoutHeaderFooter><SignupPage/></LayoutWithoutHeaderFooter>
       }/>

        <Route path='/Unathorizate' element={<LayoutWithoutHeaderFooter><NotAuthorizate/></LayoutWithoutHeaderFooter>}></Route>
        <Route path='/*' element={<LayoutWithoutHeaderFooter><NotFound/></LayoutWithoutHeaderFooter>}/>
    </Routes>
  )
}
