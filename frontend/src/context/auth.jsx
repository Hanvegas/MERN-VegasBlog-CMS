import axiosInstance from "../utils/axiosConfig";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
      const [isLoggedIn, setIsLoggedIn] = useState(null)
      const [user, setUser] = useState(null)

      useEffect(() => {
            axiosInstance.get("/check-auth")
                  .then((res) => {
                        setIsLoggedIn(res.data.authenticated)
                        setUser(res.data.user)
                  })
                  .catch(() => {
                        setIsLoggedIn(res.data.authenticated)
                        setUser(null)
                  })
      }, [])

      return (
            <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
                  {children}
            </AuthContext.Provider>
      )
}
