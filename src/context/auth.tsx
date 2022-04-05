import React, { useContext, useState, createContext } from 'react';
import { UserProps } from '../models/user';

type AuthProviderProps = {
  setAuth: (auth: UserProps) => void;
  auth?: UserProps;
};

export const AuthContext = createContext<AuthProviderProps>(
  {} as AuthProviderProps,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState<UserProps>();
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = (): AuthProviderProps => useContext(AuthContext);
