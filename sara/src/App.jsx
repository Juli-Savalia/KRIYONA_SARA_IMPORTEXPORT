import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import TopHeader from './components/TopHeader'
import Home from './pages/Home'
import Team from "./pages/Team"
import Companies from './pages/Companies'
import Contact from './pages/Contact'
import Studentcorner from './pages/Studentcorner'
import Courses from './pages/Courses'
import Signin from './pages/Signin'
import Registration from './pages/Registration'
import Forgetpsw from './pages/Forgetpsw'
import Resetpsw from './pages/Resetpsw'
import Success from './pages/Success'
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/team' element={<Team/>}></Route>
          <Route path='/companies' element={<Companies/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/studentcorner' element={<Studentcorner/>}></Route>
          <Route path='/courses' element={<Courses/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/registration' element={<Registration/>}></Route>
          <Route path='/forgetpsw' element={<Forgetpsw/>}></Route>
          <Route path='/resetpsw' element={<Resetpsw/>}></Route>
          <Route path='/success' element={<Success/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
