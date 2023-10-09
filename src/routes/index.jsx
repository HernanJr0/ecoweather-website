import { useContext } from "react"
import { AuthGoogleContext } from "../contexts/authGoogle"
import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoutes = () => {
    const {signed} = useContext(AuthGoogleContext) 
    return signed ? <Outlet/>:<Navigate to="/"/>
}