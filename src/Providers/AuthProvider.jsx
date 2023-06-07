import React, { createContext } from 'react';

const auth = 
const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default AuthProvider;