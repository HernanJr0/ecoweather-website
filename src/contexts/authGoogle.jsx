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
    getDocs,
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

    const userRef = collection(db, "users")

    const [user, setUser] = useState(null);
    const [cities, setCities] = useState(null)
    const [news, setNews] = useState(null)
    var signed = !!user


    useEffect(() => {
        const storageUser = localStorage.getItem("@AuthFirebase:user");
        const storageToken = localStorage.getItem("@AuthFirebase:token");
        const storageCities = localStorage.getItem("@AuthFirebase:cities");
        const storageNews = localStorage.getItem("@AuthFirebase:news");

        if (storageToken && storageUser) {

            setUser(JSON.parse(storageUser));

            if (!!storageCities || !!storageNews) {

                setCities(JSON.parse(storageCities))
                setNews(JSON.parse(storageNews))

            } else {
                pega(user.uid, 'cities')
                pega(user.uid, 'news')
                console.log("ai")
            }
        }

    }, []);

    async function checkUser(u) {
        const docSnap = await getDoc(doc(userRef, u.uid));

        if (!docSnap.exists() || u.displayName != docSnap.displayName) {

            setDoc(doc(userRef, u.uid), {
                username: u.displayName || "user",
            })
        }
    }

    async function pega(user, items) {
        if (items == 'cities') {

            const a = await getDocs(collection(userRef, user, "cities"))

            console.log("ai")
            const b = a.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

            setCities(b)
            localStorage.setItem("@AuthFirebase:cities", JSON.stringify(b));
        }

        if (items == 'news') {
            const a = await getDocs(collection(userRef, user, "news"))

            console.log("ai")
            const b = a.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

            setNews(b)
            localStorage.setItem("@AuthFirebase:news", JSON.stringify(b));
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
                //console.log(errorMessage)
            });
        return <Navigate to="/" />;
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

                checkUser(u)

                console.log(u);
            })
            .catch((error) => {
                const errorCode = error.code;
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

                console.log(u);

                checkUser(u)

            })
            .catch((error) => {
                //console.log(errorMessage)
            });

        return <Navigate to="/" />;
    };

    function signOut() {
        document.cookie = `city=;Secure`;
        localStorage.clear();
        setUser(null);
        return <Navigate to="/" />;
    }

    const xgUser = async (nome) => {

        await updateProfile(auth.currentUser, {
            displayName: nome
        })

        localStorage.setItem("@AuthFirebase:user", JSON.stringify(auth.currentUser));

        setUser(auth.currentUser)
        checkUser(auth.currentUser)

        console.log('success')
    }

    const xgPfp = async (file) => {

        await uploadBytes(ref(storage, 'users_pfp/' + user.uid), file)
            .then((snapshot) => {
                console.log("success")
            })

        await getDownloadURL(ref(storage, 'users_pfp/' + user.uid))
            .then(async (url) => {
                await updateProfile(auth.currentUser, {
                    photoURL: url
                })
                console.log('success')
            })
            .catch((error) => {
                console.log(error)
                // Handle any errors
            });

        localStorage.setItem("@AuthFirebase:user", JSON.stringify(auth.currentUser));

        setUser(auth.currentUser)
    }

    const addCity = async (c) => {
        await setDoc(doc(userRef, user.uid, "cities", c), {
            nome: c,
        });

        pega(user.uid, "cities")

    };

    const addNews = async (n) => {
        await setDoc(doc(userRef, user.uid, "news", n.uri), {
            uri: n.uri,
            title: n.title,
            body: n.body,

            url: n.url,
            source: n.source,
            image: n.image,
        });

        pega(user.uid, "news")

    };

    const delItem = async (items, item) => {
        await deleteDoc(doc(userRef, user.uid, items, item));

        pega(user.uid, items)
    };

    //todo
    //faz is item fav pfv

    const isNewFav = (item) => {

        for (var it in news) {
            if (item == news[it].uri) {
                return true
            } else {
                continue
            }
        }
    }

    const isCityFav = (item) => {

        for (var it in cities) {
            if (item == cities[it].nome) {
                return true;
            } else {
                continue
            }
        }
    };

    return (
        <AuthGoogleContext.Provider
            value={{
                user,
                signed,

                signInGoogle,
                createAccount,
                signInAccount,
                signOut,

                xgPfp,
                xgUser,

                cities,
                news,

                addCity,
                addNews,
                delItem,

                isCityFav,
                isNewFav
            }}
        >
            {children}
        </AuthGoogleContext.Provider>
    );
};

export const AuthGoogleContext = createContext({});
