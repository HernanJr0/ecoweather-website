import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthGoogleContext } from "../../contexts/authGoogle"

import Auth from "./Auth"

export const Login = () => {

    const { signInGoogle, signed, user } = useContext(AuthGoogleContext)

    async function loginGoogle() {
        await signInGoogle()
    }
    if (!signed) {
        return (
            <div>
                <button onClick={() => loginGoogle()}> login w google</button>
            </div>
        )
    } else {
        return <Navigate to="/home" />
    }
}