import React, {
    createContext,
    useContext,
    useEffect,
    useState
} from 'react';

import auth from '../services/authService';

// Create context object
export const UserContext = createContext({
    user: null,
    setUser: () => {}
});

export const useUser = () => useContext(UserContext);

// Create a provider component
export const Provider = ({ children }) => {
    const [user, setUser] = useState(() => auth.getCurrentUser());

    useEffect(() => {
        const handleStorageChange = () => {
            setUser(auth.getCurrentUser());
        };
        window.addEventListener("storage", handleStorageChange);
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};