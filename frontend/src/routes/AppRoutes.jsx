import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Register from '../pages/Register'

const AppRoutes = () => {
      return (
            <Routes>
                  <Route element={<MainLayout />} >
                        <Route path='/' element={<Home />} />
                  </Route>
                  <Route path='/register' element={<Register />} />
            </Routes>
      )
}

export default AppRoutes