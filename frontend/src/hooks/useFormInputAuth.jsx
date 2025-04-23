import React, { useContext, useState } from 'react'
import axiosInstance from '../utils/axiosConfig'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth'

const useFormInputAuth = () => {
      const { setIsLoggedIn } = useContext(AuthContext)
      const navigate = useNavigate()
      const [username, setUsername] = useState("")
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")

      const handleSubmitRegister = (e) => {
            e.preventDefault()
            axiosInstance.post('/register', { username, email, password })
            navigate('/login')
      }

      const handleSubmitLogin = (e) => {
            e.preventDefault()
            axiosInstance.post('/login', { username, password })
                  .then(() => {
                        setIsLoggedIn(true)
                        navigate('/')
                  }).catch(() => {
                        setIsLoggedIn(false)
                        navigate('/login')
                  })
      }

      return { username, setUsername, email, setEmail, password, setPassword, handleSubmitRegister, handleSubmitLogin }
}

export default useFormInputAuth