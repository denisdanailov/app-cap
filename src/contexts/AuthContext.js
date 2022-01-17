import { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../services/firebase';



export function useAuth() {
    return useContext(AuthContext)

}

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUSer] = useState();
    const [loading, setLoading] = useState(true);

    function login(email, password) {
       

        return auth.signInWithEmailAndPassword(email,password);
        
    }

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function logout() {
        auth.signOut()
        
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUSer(user);
            setLoading(false);
        })

        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,

    }


    return (
        <AuthContext.Provider value={value} >
            {!loading && children}
        </AuthContext.Provider>
    )
}
