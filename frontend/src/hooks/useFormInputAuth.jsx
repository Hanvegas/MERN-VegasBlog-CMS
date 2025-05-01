import React, { useContext, useState } from 'react'
import { login, register } from '../services/auth'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth'

const useFormInputAuth = () => {
      const { setIsLoggedIn } = useContext(AuthContext)
      const navigate = useNavigate()
      const [username, setUsername] = useState("")
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")

      const handleSubmitRegister = async (e) => {
            try {
                  e.preventDefault()
                  await register({ username, email, password })
                  navigate('/login')
            } catch (error) {
                  navigate('/register')
            }
      }

      const handleSubmitLogin = async (e) => {
            try {
                  e.preventDefault()
                  await login({ username, password })
                  setIsLoggedIn(true)
                  navigate('/blog')
            } catch (error) {
                  setIsLoggedIn(false)
                  navigate('/login')
            }
      }

      return { username, setUsername, email, setEmail, password, setPassword, handleSubmitRegister, handleSubmitLogin }
}

export default useFormInputAuth