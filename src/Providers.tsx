import React, { useReducer } from 'react';
import {AuthReducer} from "./store/actions/reducers/authReducer";
import * as ACTIONS from "./store/actions/actions";

export const AuthContext = React.createContext({ currentUser: {email: '', token: ''}, handleAuthLogin: (userInfo: userInfo) => {}, handleAuthLogout: () => {} });

const AuthContextProvider: React.FC = ({ children }) => {
  const [currentUser, dispatch] = useReducer(AuthReducer, JSON.parse(localStorage.getItem('currentUser')));

  const handleLogin = (data: userInfo) => {
    localStorage.setItem('currentUser', JSON.stringify(data))
    dispatch(ACTIONS.login(data));
  };

  const handleLogout = () => {
    dispatch(ACTIONS.logout());
    localStorage.removeItem('currentUser')
  };

  return <AuthContext.Provider value={{ currentUser, handleAuthLogin: (userInfo) => handleLogin(userInfo), handleAuthLogout: () => handleLogout() }}>{children}</AuthContext.Provider>;
}

const Providers: React.FC = ({ children }) => {
  return <AuthContextProvider>
    {children}
  </AuthContextProvider>
}

export default Providers;
