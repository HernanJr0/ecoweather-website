import './TelaAuth.css'
import Auth from "./Auth"

import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthGoogleContext } from "../../contexts/authGoogle"
import { Button, InputAdornment } from "@mui/material"
import GoogleIcon from '@mui/icons-material/Google';
import { Margin } from "@mui/icons-material";

export const Login = () => {

    const { signInGoogle, signed, user } = useContext(AuthGoogleContext)

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