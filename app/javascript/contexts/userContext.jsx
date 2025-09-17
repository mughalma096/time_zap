import React, { createContext, useEffect, useState } from 'react';

import auth from '../services/authService';

// Create context object
export const UserContext = createContext({});

// Create a provider component
export const Provider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if(!user)
            setUser(auth.getCurrentUser());
    }, []);

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};