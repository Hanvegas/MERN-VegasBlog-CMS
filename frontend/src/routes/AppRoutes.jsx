import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'

const AppRoutes = () => {
      return (
            <Routes>
                  <Route element={<MainLayout />} >
                        <Route path='/' element={<Home />} />
                  </Route>
            </Routes>
      )
}

export default AppRoutes