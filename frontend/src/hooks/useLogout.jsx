import React from 'react'
import { logout } from '../services/auth'
import { useNavigate } from 'react-router-dom'

const useLogout = () => {
      const navigate = useNavigate()

      const handleLogout = async () => {
            await logout()
            navigate("/login")
      }

      return { handleLogout }
}

export default useLogout