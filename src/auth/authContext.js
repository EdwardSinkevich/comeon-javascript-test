import { createContext, useContext, useState } from "react";
import {
  login as loginAPI,
  logout as logoutAPI,
} from "../services/authService";

const USER_DATA_LS_KEY = "user";

const getInitialState = () => {
  const user = localStorage.getItem(USER_DATA_LS_KEY);
  return user ? JSON.parse(user) : null;
};

const AuthContext = createContext({
  user: getInitialState(),
  error: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getInitialState);
  const [error, setError] = useState(null);

  const login = async ({ username, password }) => {
    try {
      const data = await loginAPI({ username, password });
      if (data.status === "success") {
        const userData = { username, data: data.player };
        setUser(userData);
        setError(null);

        localStorage.setItem(USER_DATA_LS_KEY, JSON.stringify(userData));
      } else {
        setError(data.error);
      }
    } catch (e) {
      setError(e);
    }
  };

  const logout = async () => {
    try {
      const data = await logoutAPI(user.username);
      if (data.status === "success") {
        setUser(null);
        localStorage.clear(USER_DATA_LS_KEY, null);
      } else {
        setError(data.error);
      }
    } catch (e) {
      setError(e);
    }
  };

  return (
    <AuthContext.Provider value={{ user, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
