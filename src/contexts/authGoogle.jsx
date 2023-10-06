import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../service/firebaseConfig.jsx"
import { Navigate } from "react-router-dom";

const provider = new GoogleAuthProvider()

export const AuthGoogleContext = createContext({})

export const AuthGoogleProvider = ({ children }) => {

    const auth = getAuth(app);
    const [user, setUser] = useState(null)

    useEffect(() => {
        const loadStorageData = () => {
            const sessionUser = sessionStorage.getItem("@AuthFirebase:user")
            const sessionToken = sessionStorage.getItem("@AuthFirebase:token")
            if (sessionToken && sessionUser) {
                setUser(sessionUser)
            }
        }
        loadStorageData()
    })

    const createAccount = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // // Signed in 
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // const user = userCredential.user;
                // setUser(user)
                // sessionStorage.setItem("@AuthFirebase:token", token)
                // sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user))
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                // console.log(errorMessage)
            });
    }

    const signInAccount = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                console.log(result)

                const user = result.user;
                const token = user.accessToken;
                setUser(user)
                sessionStorage.setItem("@AuthFirebase:token", token)
                sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user))

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
        return <Navigate to="/home" />
    }

    const signInGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;

                setUser(user)
                sessionStorage.setItem("@AuthFirebase:token", token)
                sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user))

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log(errorCode)
                // console.log(errorMessage)
                // console.log(email)
                // console.log(credential)
            }
            );
    }

    function signOut() {
        sessionStorage.clear();
        setUser(null)
        return <Navigate to="/" />
    }

    return (
        <AuthGoogleContext.Provider
            value={{
                signed: !!user,
                user,
                createAccount,
                signInAccount,
                signInGoogle,
                signOut
            }}
        >
            {children}
        </AuthGoogleContext.Provider>
    )
}
