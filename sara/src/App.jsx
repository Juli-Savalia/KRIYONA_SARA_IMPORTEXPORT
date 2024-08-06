import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import TopHeader from './components/TopHeader'
import Home from './pages/Home'
import Team from "./pages/Team"
import Companies from './pages/Companies'
import Contact from './pages/Contact'
import Studentcorner from './pages/Studentcorner'
import Courses from './pages/Courses'
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
        </Routes>
    </BrowserRouter>
  )
}

export default App
