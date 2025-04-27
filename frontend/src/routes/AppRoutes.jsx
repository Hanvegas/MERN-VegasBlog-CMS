import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import AuthRoute from './AuthRoute'
import BlogDetail from '../pages/blog/BlogDetail'

const AppRoutes = () => {
      return (
            <Routes>
                  <Route element={<AuthRoute />}>
                        <Route element={<MainLayout />}>
                              <Route path='/' element={<Home />} />
                        </Route>
                        <Route path='/:id' element={<BlogDetail />} />
                  </Route>
                  <Route path='/register' element={<Register />} />
                  <Route path='/login' element={<Login />} />
            </Routes>
      )
}

export default AppRoutes