import { useEffect, useState } from "react"
import initializeAuthentication from "../firebase/firebase.init"
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged 
} from "firebase/auth";


initializeAuthentication()
const useFirebase = () => {
    const [users, setUsers] = useState({})
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            /* .then(result=> {
                setUsers(result.user)
            }) */
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUsers({})
            })
    }
    useEffect(()=> {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUsers(user)
            }
            else{
                setUsers({})
            }
        })
        return () => unsubscribed;
    },[])
    return{
        users,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;