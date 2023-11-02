import './TelaAuth.css';

import { useEffect, useState } from "react";
import { TextField, InputAdornment, IconButton, Button } from "@mui/material";
import { Person, Email } from "@mui/icons-material";
import { Login } from "./Login";
import { useContext } from "react"
import { AuthGoogleContext } from "../../contexts/authGoogle"

import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
// import {
//     collection,
//     getFirestore,
//     getDocs,
//     addDoc,
//     doc,
//     deleteDoc,
// } from "firebase/firestore";

// import { getAuth } from "firebase/auth"
// import { initializeApp } from "firebase/app";

// const firebaseApp = initializeApp({
//     apiKey: "AIzaSyDYfNOUrNRYL54saMHsTIhyVWubkmR9i_s",
//     authDomain: "ecoweather-d0887.firebaseapp.com",
//     projectId: "ecoweather-d0887",
// });

export const Auth = () => {

    /* 
    const db = getFirestore(firebaseApp);
    const userCollectionRef = collection(db, "users");


    async function criaUser() {

        if (email && password != "") {
            const user = await addDoc(userCollectionRef, {
                email,
                password,
            });

            console.log(user);
            alert('Conta criada com sucesso!')
        } else {
            alert('Falha ao criar conta!')
        }
    }

      useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(userCollectionRef);
          setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
      }, [userCollectionRef]);

    async function deleteUser(id) {
      const userDoc = doc(db, "users", id);
      await deleteDoc(userDoc);
    } 
    */

    // const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    const [showPassword, setShowPassword] = useState(false);

    const { createAccount, signInAccount } = useContext(AuthGoogleContext)

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    


    async function login() {
        await createAccount(userField.value, emailField.value, passwordField.value)

        setTimeout(
            () => {
                signInAccount(emailField.value, passwordField.value)
            },
            1000
        );
    }

    return (
        <div>

            <form id="formulario">
                <h1>Criar Conta</h1>
                <div id='campos'>

                    {/* 
                    <div id="imgCont">
                        <img id="imgField" src={'https://tinyurl.com/5kub7nce'} onClick={clica} />
                        <input id="inputFile" type="file" onChange={handleIMG} />
                    </div> 
                    */}

                    <div id="userCont">
                        <TextField
                            id="userField"
                            variant="outlined"
                            label="User"
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
                <Button id='btnCriar' variant="contained" onClick={login} >Criar Usuário</Button>
                <Login />
            </form>
            {/* <ul>
        {users.map((user) => {
          return (
            <div>
              <li>{user.email}</li>
              <li>{user.password}</li>
              <button onClick={() => deleteUser(user.id)}>Deletar</button>
            </div>
          );
        })}
      </ul> */}
        </div>
    );
}

export default Auth;