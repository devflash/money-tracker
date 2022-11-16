import React, { useState, createContext, useContext } from 'react';
const AuthContext = createContext({
  email: null,
  displayName: null,
  setAuth: () => {},
});

const MoneyTrackerContext = ({ children }) => {
  const [auth, setAuth] = useState({ email: null, displayName: null });

  return (
    <AuthContext.Provider
      value={{ email: auth.email, displayName: auth.displayName, setAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { MoneyTrackerContext, useAuth };
