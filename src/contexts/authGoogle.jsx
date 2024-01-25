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

import { toast } from 'react-toastify';

const provider = new GoogleAuthProvider();

export const AuthGoogleProvider = ({ children }) => {

    const db = getFirestore(app);
    const auth = getAuth(app);
    const storage = getStorage(app)

    const userRef = collection(db, "users")

    const storageToken = localStorage.getItem("@AuthFirebase:token");

    const storageUser = JSON.parse(localStorage.getItem("@AuthFirebase:user"))
    const [user, setUser] = useState(storageUser);


    const storageCities = JSON.parse(localStorage.getItem("@AuthFirebase:cities"));
    const storageNews = JSON.parse(localStorage.getItem("@AuthFirebase:news"));

    const [cidades, setCidades] = useState(storageCities)
    const [noticias, setNoticias] = useState(storageNews)

    const
        cities = cidades,
        news = noticias;

    useEffect(() => {
        if (storageToken && storageUser) {
            setUser(storageUser);

            pega("cities", true)
            pega("news", true)
            console.log(children)
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
                    toast.error("Email ou senha Inválidos");

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


        setUser(auth.currentUser)
        localStorage.setItem("@AuthFirebase:user", JSON.stringify(auth.currentUser));
        checkUser(auth.currentUser)

        console.log('Success')
        toast.success('Nome de usuário alterado')
    }

    const xgPfp = async (file) => {

        await uploadBytes(ref(storage, 'users_pfp/' + user.uid), file)
            .then((snapshot) => {
                console.log("Success")
            })

        await getDownloadURL(ref(storage, 'users_pfp/' + user.uid))
            .then(async (url) => {
                await updateProfile(auth.currentUser, {
                    photoURL: url
                })
                console.log('Success')
                toast.success('Foto de perfil alterada')
            })
            .catch((error) => {
                console.log(error)
                // Handle any errors
            });


        setUser(auth.currentUser)
        localStorage.setItem("@AuthFirebase:user", JSON.stringify(auth.currentUser));
    }

    async function pega(items) {

        // console.log(items)

        console.log("ai")

        const a = await getDocs(collection(userRef, user.uid, items))

        const b = a.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

        if (items == "cities") {
            localStorage.setItem("@AuthFirebase:cities", JSON.stringify(b));
            setCidades(b)
        }

        if (items == "news") {
            localStorage.setItem("@AuthFirebase:news", JSON.stringify(b));
            setNoticias(b)
        }
    }

    const addCity = async (c) => {
        await setDoc(doc(userRef, user.uid, "cities", c), {
            nome: c,
        });

        pega("cities")
        console.log("adc")
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


        pega("news")
        console.log("adn")
    };

    const delItem = async (items, item) => {
        await deleteDoc(doc(userRef, user.uid, items, item));

        pega(items)
        console.log("del")
    };

    //todo
    //faz is item fav pfv

    const isItemFav = (items,item) => {

        if (items == 'cities') {

            for (var it in cities) {
                if (item == cities[it].nome) {
                    return true
                }
            }
            return false

        }
        if (items == 'news') {

            for (var it in news) {
                if (item == news[it].uri) {
                    return true
                }
            }
            return false

        }
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

                xgPfp,
                xgUser,

                cities,
                news,

                addCity,
                addNews,
                delItem,

                isItemFav
            }}
        >
            {children}
        </AuthGoogleContext.Provider>
    );
};

export const AuthGoogleContext = createContext({});
