import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext,  useEffect,  useState } from "react";
import auth from "../firebase/_firebase_init";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    
    const terminateUser = () => {
        return deleteUser(auth.currentUser)
    }

    useEffect(()=> {
        const unsubscribe = auth.onAuthStateChanged( currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, []);

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }
    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        loginUser,
        updateUserProfile,
        logout,
        terminateUser

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;