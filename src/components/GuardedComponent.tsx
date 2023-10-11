import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';

import {AuthContext} from "../Providers";

const GuardedComponent = ({ component }: any) => {
  const { currentUser } = useContext(AuthContext);
  return currentUser.token ? component : <Navigate replace to='/'/>
}

export default GuardedComponent;
