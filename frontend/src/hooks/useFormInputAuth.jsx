import React, { useState } from 'react'
import axios from 'axios'
import { API_REGISTER } from '../../config'
import { useNavigate } from 'react-router-dom'

const useFormInputAuth = () => {
      const navigate = useNavigate()
      const [username, setUsername] = useState("")
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")

      const handleSubmitRegister = (e) => {
            e.preventDefault()
            axios.post(API_REGISTER, {username, email, password})
            navigate('/login')
      }

      const handleSubmitLogin = (e) => {
            e.preventDefault()
      }

      return { username, setUsername, email, setEmail, password, setPassword, handleSubmitRegister, handleSubmitLogin }
}

export default useFormInputAuth