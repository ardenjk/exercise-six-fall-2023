//creating application wrapper 
import { useCallback, useEffect, useState } from "react";
import {initializeApp} from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import Header from "@/app/components/Header";
import firebaseConfig from "@/app/components/firebaseConfig";

export default function MyApp({ Component, pageProps }) {
    const [appInitizlied, setAppIsInitialized] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInformation, setUserInformation] = useState(null);
    const [error, setError] = useState(null);

const createUser = useCallback((e) => {
    e.preventDefault();
    //Assign Email and Password to variables from form 
    const email = e.currentTarget.email.valuie;
    const password = e.currentTarget.password.value;
    const auth = getAuth();
    createUserWithEmailAndPassword (auth,email, password)

    .then ((userCredential) => {
        const user = userCredential.user;
        //since the user is true, set loggedIn to true 
        setUserInformation(user);
        setIsLoggedIn(true);
        //clean any errors 
        setError(null);
    })

    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn(errorCode, errorMessage);
        setError(errorMessage);
    });

}, [setError, setIsLoggedIn, setUserInformation]);

const loginUser = useCallback((e) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then ((userCredential) => {
        const user = userCredential.user;
        setUserInformation(user);
        setIsLoggedIn(true);
        setError(null);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn(errorCode, errorMessage);
        setError(errorMessage);
    })
}, [setError, setIsLoggedIn, setUserInformation]);

const logoutUser = useCallback(() => {
    const auth = getAuth();
    signOut(auth)
    .then(() => {
        setUserInformation(null);
        setIsLoggedIn(false);
    })  
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn (errorCode, errorMessage);
        setError(errorMessage);
    }); 

}, [signOut, setIsLoggedIn, setUserInformation]);

//Initialize Firebase (authentication)
useEffect(() => {
    initializeApp(firebaseConfig);
    setAppIsInitialized(true);
}, []);

//User has loaded page, check their status and set state accordingly
useEffect(() => {

}, [appInitizlied]);

    // if (appInitizlied) {
    //     const auth = getAuth();


//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 //User is signed in
//                 setUserInformation(user);
//                 setIsLoggedIn(true);
//             } else {
//                 //User is signed out
//                 setUserInformation(null);
//                 setIsLoggedIn(false);
//             }
//             //setLoading to false when everything is complete 
//             setIsLoading(false);
//         }); 
//     }
// }, [appInitizlied]);

if (isLoading) return null; 

    return (
        <>
            <Header isLoggedIn={isLoggedIn} logoutUSer={logoutUser} />
            <Component
            {...pageProps}
            createUser={createUser}
            isLoggedIn={isLoggedIn}
            loginUser={loginUser}
            userInformation={userInformation}
            
            />
            <p>{error}</p>
        </>
    );
}