import AsyncStorage from '@react-native-community/async-storage';
import React, { useContext, useEffect, useState } from 'react';

import { setHeaderToken, removeHeaderToken } from '../api';
import { login as performLogin } from '../api/auth';
import { LoadingModal } from '../components/LoadingModal';
import { AsyncStorageKey } from '../constants/AsyncStorage';

export type AuthState = {
  token: string;
  firstName: string;
  lastName: string;
};

const initialState = {
  firstName: '',
  lastName: '',
  token: null,
};

const AuthContext = React.createContext<any>({
  state: initialState,
});

export const useAuth = () => useContext(AuthContext);

function AuthContextProvider({ children }: { children: any }) {
  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const login = async ({ userName, password }: { userName: string; password: string }) => {
    try {
      const { firstName, lastName, token } = await performLogin({ userName, password });

      setUser({ firstName, lastName, token });
    } catch (e) {
      console.log(e);
    }
  };

  const logout = () => {
    setUser({ ...initialState });

    removeHeaderToken();
  };

  const getUserFromStorage = async () => {
    const value = await AsyncStorage.getItem(AsyncStorageKey.USER);

    if (value) {
      setUser(JSON.parse(value));
    }

    setLoading(false);
  };

  useEffect(() => {
    getUserFromStorage();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(AsyncStorageKey.USER, JSON.stringify(user));

    if (user.token) {
      setHeaderToken((user.token as unknown) as string);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <LoadingModal loading={loading} />
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
