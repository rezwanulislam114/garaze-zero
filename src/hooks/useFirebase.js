import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../pages/Authentication/Firebase/firebase.init";

// call firebase initialize
firebaseInitialize();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    // register with email and password
    const createUser = (email, password, name, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser)

                // add to database 
                saveToDatabase(email, name)

                // update name in firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // set displayName
                }).catch((error) => {
                    // error
                });
                history.replace('/')
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    // login user with email and password 
    const loginUserWithEmailandPass = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);
                setError('');
                const destination = location.state?.from || '/';
                history.replace(destination);
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setLoading(false));
    }

    // for getting currently signid in user 
    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // signed in 
                setUser(user);
                setError('')
                setLoading(false)
            } else {
                // signed out 
                setUser({})
            }
            setLoading(false)
        });
        return unsubscribe;
    }, [])

    // logout 
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    // save user to database
    const saveToDatabase = (email, displayName) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    // use effect for verify admin 
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    return {
        user,
        error,
        setError,
        loading,
        createUser,
        loginUserWithEmailandPass,
        logOut,
        admin
    }
}

export default useFirebase;