import React, { createContext, useEffect, useState } from 'react';

import auth from '../services/authService';

// Create context object
export const UserContext = createContext({});

// Create a provider component
export const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        if(Boolean(user)) return;

        setUser(auth.getCurrentUser());
    }, [user]);

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};