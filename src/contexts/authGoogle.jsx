import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../service/firebaseConfig.jsx"
import { Navigate } from "react-router-dom";

const provider = new GoogleAuthProvider()

export const AuthGoogleContext = createContext({})

export const AuthGoogleProvider = ({ children }) => {

    const auth = getAuth(app);

    const [user, setUser] = useState(null)

    //   useEffect(() => {
    //     const getUsers = async () => {
    //       const data = await getDocs(userCollectionRef);
    //       setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //     };
    //     getUsers();
    //   }, [userCollectionRef]);

    useEffect(() => {
        const storageUser = localStorage.getItem("@AuthFirebase:user")
        const storageToken = localStorage.getItem("@AuthFirebase:token")
        if (storageToken && storageUser) {
            setUser(storageUser)
        }
    })

    const createAccount = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                if (errorCode == "auth/invalid-email")
                    alert("POE UM EMAIL E UMA SENHA QUE EXISTE, OTARIO")

                console.log(errorCode)
            });
    }

    const signInAccount = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                const token = user.accessToken;

                setUser(user)
                localStorage.setItem("@AuthFirebase:token", token)
                localStorage.setItem("@AuthFirebase:user", JSON.stringify(user))

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                //console.log(errorMessage)
            });
        return <Navigate to="/" />
    }

    const signInGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;

                setUser(user)
                localStorage.setItem("@AuthFirebase:token", token)
                localStorage.setItem("@AuthFirebase:user", JSON.stringify(user))

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;

                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);

                console.log(errorMessage)
                // console.log(errorMessage)
                // console.log(email)
                // console.log(credential)
            });
    }





    // const db = getDatabase();
    // const userCollectionRef = ref(db, "users", id);
    
    // const [city, setCity] = useState(null)

    // useEffect(() => {
    //     const getCities = async () => {
    //         const data = await getDocs(userCollectionRef);
    //         setCity(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //     };
    //     getCities();
    // }, [userCollectionRef]);

    // const cidades = () => {
    //     return city.map((user) => {
    //         return user
    //     })
    // }

    // const addCity = async (cidade) => {
    //     //adiciona cidade
    //     await addDoc(userCollectionRef, cidade);
    // }
    // const delCity = async (cidade) => {
    //     //remove cidade
    //     await deleteDoc(userCollectionRef, cidade);
    // }






    function signOut() {
        localStorage.clear();
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
