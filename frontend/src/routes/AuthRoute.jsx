import { useContext } from "react"
import { AuthContext } from "../context/auth"
import { Navigate, Outlet } from "react-router-dom"
import Loading from "../components/Loading"


const AuthRoute = () => {
      const { isLoggedIn } = useContext(AuthContext)
      
      if (isLoggedIn === null) return <Loading />

      return isLoggedIn ? <Outlet /> : <Navigate to='/login' />
}

export default AuthRoute