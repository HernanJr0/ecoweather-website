import { app } from "../service/firebaseConfig.jsx";
import { Navigate } from "react-router-dom";

import "firebase/firestore";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";

import {
    getFirestore,
    doc,
    deleteDoc,
    getDoc,
    getDocs,
    setDoc,
    collection,
} from "firebase/firestore";

const provider = new GoogleAuthProvider();

export const AuthGoogleProvider = ({ children }) => {
    const db = getFirestore(app);
    const auth = getAuth(app);

    const [user, setUser] = useState(null);

    useEffect(() => {
        const storageUser = localStorage.getItem("@AuthFirebase:user");
        const storageToken = localStorage.getItem("@AuthFirebase:token");
        if (storageToken && storageUser) {
            setUser(storageUser);
        }
    });

    const createAccount = async (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;

                setDoc(doc(db, "users", user.uid), {
                    username: user.displayName || "user",
                });
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                if (errorCode == "auth/invalid-email")
                    alert("POE UM EMAIL E UMA SENHA QUE EXISTE, OTARIO");

                console.log(error);
            });
    };

    const signInAccount = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(async (result) => {
                // Signed in
                const u = result.user;
                const token = u.accessToken;

                setUser(JSON.stringify(u));
                localStorage.setItem("@AuthFirebase:user", JSON.stringify(u));
                localStorage.setItem("@AuthFirebase:token", token);

                const docRef = doc(db, "users", u.uid);
                const docSnap = await getDoc(docRef);

                if (!docSnap.exists()) {
                    setDoc(doc(db, "users", u.uid), {
                        username: u.displayName || "user",
                    });
                }
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                //console.log(errorMessage)
            });
        return <Navigate to="/" />;
    };

    const signInGoogle = () => {
        signInWithPopup(auth, provider)
            .then(async (result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const u = result.user;

                setUser(JSON.stringify(u));
                localStorage.setItem("@AuthFirebase:user", JSON.stringify(u));
                localStorage.setItem("@AuthFirebase:token", token);

                const docRef = doc(db, "users", u.uid);
                const docSnap = await getDoc(docRef);

                if (!docSnap.exists()) {
                    setDoc(doc(db, "users", u.uid), {
                        username: u.displayName || "user",
                    });
                }

                console.log(result);

                setDoc(doc(db, "users", user.uid), {
                    username: user.displayName,
                });
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;

                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                    GoogleAuthProvider.credentialFromError(error);

                console.log(errorMessage);
                // console.log(errorMessage)
                // console.log(email)
                // console.log(credential)
            });
    };

    const addCity = (city) => {
        const u = JSON.parse(user);

        setDoc(doc(db, "users", u.uid, "cities", city), {
            nome: city,
        });
    };

    const delCity = (city) => {
        const u = JSON.parse(user);

        deleteDoc(doc(db, "users", u.uid, "cities", city));
    };

    const isCityFav = async (city) => {
        const u = JSON.parse(user);

        const docRef = doc(db, "users", u.uid, "cities", city);
        const docSnap = await getDoc(docRef);

        var x;

        if (docSnap.exists()) {
            x = true;
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
            x = false;
        }
        return x;
    };

    function signOut() {
        document.cookie = `city=;Secure`;
        localStorage.clear();
        setUser(null);
        return <Navigate to="/" />;
    }

    return (
        <AuthGoogleContext.Provider
            value={{
                user,
                signed: !!user,

                signInGoogle,
                createAccount,
                signInAccount,
                signOut,

                isCityFav,
                addCity,
                delCity
            }}
        >
            {children}
        </AuthGoogleContext.Provider>
    );
};

export const AuthGoogleContext = createContext({});
