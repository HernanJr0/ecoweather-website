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


import {
	getStorage,
	ref,
	uploadBytes,
	getDownloadURL,
} from "firebase/storage";

const provider = new GoogleAuthProvider();

export const AuthGoogleProvider = ({ children }) => {

    const db = getFirestore(app);
    const auth = getAuth(app);
	const storage = getStorage(app)

    const [user, setUser] = useState(null);

    const userRef = collection(db, "users")

    useEffect(() => {
        const storageUser = localStorage.getItem("@AuthFirebase:user");
        const storageToken = localStorage.getItem("@AuthFirebase:token");
        if (storageToken && storageUser) {
            setUser(JSON.parse(storageUser));
        }
    }, []);

    async function checkUser(user) {
        const docSnap = await getDoc(doc(db, "users", user.uid));

        if (!docSnap.exists()) {
            setDoc(doc(userRef, user.uid), {
                username: user.displayName || "user",
            })
        }
    }

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

    const createAccount = async (username, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const u = result.user;

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

    const xgpfp = async (file) => {

        await uploadBytes(ref(storage, 'users_pfp/' + user.uid), file)
            .then((snapshot) => {
                console.log("success")
                console.log(file)
            })

        getDownloadURL(ref(storage, 'users_pfp/' + user.uid))
            .then((url) => {
                updateProfile(auth.currentUser, {
                    photoURL: url
                })
                console.log('success')
                console.log(url)
            })
            .catch((error) => {
                console.log(error)
                // Handle any errors
            });
    }

    const addCity = (city) => {
        setDoc(doc(userRef, user.uid, "cities", city), {
            nome: city,
        });
    };

    const addNews = (news) => {
        setDoc(doc(userRef, user.uid, "news", news.uri), {

            uri: news.uri,
            title: news.title,
            body: news.body,

            url: news.url,
            source: news.source,
            image: news.image,

            fav: news.fav
        });
    };

    const delItem = (items, item) => {
        deleteDoc(doc(userRef, user.uid, items, item));
    };

    const isItemFav = async (items, item) => {
        const docSnap = await getDoc(doc(userRef, user.uid, items, item));

        var x;

        if (docSnap.exists()) {
            x = true;
        } else {
            // docSnap.data() will be undefined in this case
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

                xgpfp,

                addCity,
                addNews,
                delItem,

                isItemFav,
            }}
        >
            {children}
        </AuthGoogleContext.Provider>
    );
};

export const AuthGoogleContext = createContext({});
