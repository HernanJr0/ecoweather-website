import './TelaAuth.css'

import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthGoogleContext } from "../../contexts/authGoogle"
import { Button } from "@mui/material"
import GoogleIcon from '@mui/icons-material/Google';

export const Login = () => {

    const { signInGoogle, signed } = useContext(AuthGoogleContext)

    async function loginGoogle() {
        await signInGoogle()
    }
    if (!signed) {
        return (
            <div id='btnGoogle'>
                <Button variant="outlined"
                    startIcon={<GoogleIcon />}
                    onClick={() => loginGoogle()}> Continuar com Google</Button>
            </div>
        )
    } else {
        return <Navigate to="/home" />
    }
}