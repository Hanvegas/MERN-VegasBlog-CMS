import axiosInstance from "../utils/axiosConfig";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
      const [isLoggedIn, setIsLoggedIn] = useState(null)
      const [user, setUser] = useState(null)

      useEffect(() => {
            const checkData = async() => {
                  try {
                        const res = await axiosInstance.get('/check-auth')
                        if (res.data.authenticated) {
                              setIsLoggedIn(true)
                              setUser(res.data.user)
                        } else {
                              setIsLoggedIn(false)
                              setUser(null)
                        }
                  } catch (error) {
                        setIsLoggedIn(false)
                        setUser(null)
                  }
            }

            checkData()
      }, [])

      return (
            <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
                  {children}
            </AuthContext.Provider>
      )
}
