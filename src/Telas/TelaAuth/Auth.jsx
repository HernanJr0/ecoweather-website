import './TelaAuth.css';


import GoogleIcon from '@mui/icons-material/Google';

import { useEffect, useState, useContext } from "react";
import { TextField, InputAdornment, IconButton, Button } from "@mui/material";
import { Person, Email } from "@mui/icons-material";
import { AuthGoogleContext } from "../../contexts/authGoogle"

import { ToastContainer } from 'react-toastify';

import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";

export const Auth = () => {

    // const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    const [showPassword, setShowPassword] = useState(false);

    const { createAccount, signInAccount, signInGoogle } = useContext(AuthGoogleContext)

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    async function login() {
        await createAccount(userField.value, emailField.value, passwordField.value)

        setTimeout(
            () => {
                signInAccount(emailField.value, passwordField.value)
            },
            500
        );
    }

    return (
        <div>
            <form id="formulario">
                <h1>Seja Bem-vindo</h1>
                <div id='campos'>

                    <div id="userCont">
                        <TextField
                            id="userField"
                            variant="outlined"
                            label="Username"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Person />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>

                    <div id="emailCont">
                        <TextField
                            id="emailField"
                            variant="outlined"
                            type="email"
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Email />
                                    </InputAdornment>
                                ),
                            }}
                            required
                        />
                    </div>

                    <div id="senhaCont">
                        <TextField
                            id="passwordField"
                            variant="outlined"
                            type={showPassword ? 'text' : 'password'}
                            label="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key == 'Enter') {
                                    document.getElementById("btnCriar").click()
                                }
                            }}
                            InputProps={{
                                endAdornment: (
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}>
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                ),
                            }}
                            required
                        />
                    </div>
                </div>
                <Button id='btnCriar' variant="contained" onClick={login} >Cadastrar / Logar</Button>

                <div id='btnGoogle'>
                    <Button variant="outlined"
                        startIcon={<GoogleIcon />}
                        onClick={async () => await signInGoogle()}> Continuar com Google</Button>
                </div>
            </form>
            
            <ToastContainer autoClose={2000} theme='colored' newestOnTop={true} position='bottom-right' />
        </div>
    );
}

export default Auth;