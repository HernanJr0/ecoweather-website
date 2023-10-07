import './Auth.css';

import { useEffect, useState } from "react";
import { TextField, InputAdornment, Button } from "@mui/material";
import { Person, Email } from "@mui/icons-material";
import { Login } from "./Login";
import { useContext } from "react"
import { AuthGoogleContext } from "../../contexts/authGoogle"

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
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    {// const db = getFirestore(firebaseApp);
        // const userCollectionRef = collection(db, "users");


        // window.onload = () => {
        // }

        // async function criaUser() {

        //     if (email && password != "") {
        //         const user = await addDoc(userCollectionRef, {
        //             email,
        //             password,
        //         });
        //         console.log(user);
        //         alert('Conta criada com sucesso!')
        //         document.cookie = `email= ${email}; Secure`;
        //         document.cookie = `; Secure`
        //     } else {
        //         alert('Falha ao criar conta!')
        //     }
        // }

        //   useEffect(() => {
        //     const getUsers = async () => {
        //       const data = await getDocs(userCollectionRef);
        //       setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        //     };
        //     getUsers();
        //   }, [userCollectionRef]);

        // async function deleteUser(id) {
        //   const userDoc = doc(db, "users", id);
        //   await deleteDoc(userDoc);
        // }
    }

    const { createAccount, signInAccount } = useContext(AuthGoogleContext)

    async function login() {
        await createAccount(emailField.value, passwordField.value)

        setTimeout(
            () => {
                signInAccount(emailField.value, passwordField.value)
                console.log("pega")
            },
            1000
        );
    }

    return (
        <div>

            <form id="formulario">
                <h1>Criar Conta</h1>
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
                <div id="senhaCont">
                    <TextField
                        id="passwordField"
                        variant="outlined"
                        type="password"
                        label="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Person />
                                </InputAdornment>
                            ),
                        }}
                        required
                    />
                </div>
                <Button variant="outlined" onClick={login} >Criar Usuário</Button>
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