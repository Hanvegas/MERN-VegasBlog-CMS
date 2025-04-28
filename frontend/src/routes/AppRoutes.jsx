import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import AuthRoute from './AuthRoute'
import BlogDetail from '../pages/blog/BlogDetail'
import EditBlog from '../pages/blog/EditBlog'
import CreateBlog from '../pages/blog/CreateBlog'

const AppRoutes = () => {
      return (
            <Routes>
                  <Route element={<MainLayout />}>
                        <Route path='/' element={<Home />} />
                  </Route>
                  <Route element={<AuthRoute />}>
                        <Route path='/:id' element={<BlogDetail />} />
                        <Route path='/edit/:id' element={<EditBlog />} />
                        <Route path='/create' element={<CreateBlog />} />
                  </Route>
                  <Route path='/register' element={<Register />} />
                  <Route path='/login' element={<Login />} />
            </Routes>
      )
}

export default AppRoutes