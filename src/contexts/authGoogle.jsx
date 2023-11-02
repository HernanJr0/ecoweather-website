import { app } from "../service/firebaseConfig.jsx";
import { Navigate } from "react-router-dom";

import "firebase/firestore";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";

import {
    getFirestore,
    doc,
    deleteDoc,
    getDoc,
    setDoc,
    collection,

} from "firebase/firestore";


const provider = new GoogleAuthProvider();

export const AuthGoogleProvider = ({ children }) => {

    const db = getFirestore(app);
    const auth = getAuth(app);

    const [user, setUser] = useState(null);

    const userRef = collection(db, "users")

    useEffect(() => {
        const storageUser = localStorage.getItem("@AuthFirebase:user");
        const storageToken = localStorage.getItem("@AuthFirebase:token");
        if (storageToken && storageUser) {
            setUser(JSON.parse(storageUser));
        }
    },[]);

    async function checkUser(user) {
        const docSnap = await getDoc(doc(db, "users", user.uid));

        if (!docSnap.exists()) {
            setDoc(doc(userRef, user.uid), {
                username: user.displayName || "user",
            })
        }
    }

    const createAccount = async (username, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const u = result.user;

                {
                    // getDownloadURL(ref(storage, 'images/stars.jpg'))
                    //     .then((url) => {

                    //     })

                    // uploadBytes(ref(storage, u.uid), pfp)
                    //     .then((snapshot) => {
                    //         console.log("success")
                    //     })
                }

                if (username != '') {
                    updateProfile(u, {
                        displayName: username,
                    })
                }

                setDoc(doc(db, "users", u.uid), {
                    username: username || "user",
                });

                console.log(u);
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

                setUser(u);
                localStorage.setItem("@AuthFirebase:user", JSON.stringify(u));
                localStorage.setItem("@AuthFirebase:token", token);

                checkUser(u)
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

                setUser(u);
                localStorage.setItem("@AuthFirebase:user", JSON.stringify(u));
                localStorage.setItem("@AuthFirebase:token", token);

                console.log(u);

                checkUser(u)
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;

                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);

                console.log(errorMessage);
                // console.log(errorMessage)
                // console.log(email)
                // console.log(credential)
            });
    };

    const addCity = (city) => {
        const u = user;

        setDoc(doc(userRef, u.uid, "cities", city), {
            nome: city,
        });
    };

    const delCity = (city) => {
        const u = user;

        deleteDoc(doc(userRef, u.uid, "cities", city));
    };

    const isCityFav = async (city) => {
        const u = user;

        const docSnap = await getDoc(doc(userRef, u.uid, "cities", city));

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
