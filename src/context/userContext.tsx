import React, { useState, createContext, useContext } from "react";

type UserContextType = {
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
  userAuthenticated: boolean;
  setUserAuthenticated: (payload: boolean) => void;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

const useUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  return {
    username,
    setUsername: (payload: string) => setUsername(payload),
    password,
    setPassword: (payload: string) => setPassword(payload),
    userAuthenticated,
    setUserAuthenticated: (payload: boolean) => setUserAuthenticated(payload),
  };
};

const UserContext = createContext<UserContextType>({
  username: "",
  setUsername: (payload: string) => {},
  password: "",
  setPassword: (payload: string) => {},
  userAuthenticated: false,
  setUserAuthenticated: (payload: boolean) => {},
});

export const UserProvider = ({
  children,
}: UserContextProviderProps): JSX.Element => {
  return (
    <UserContext.Provider value={useUser()}>{children}</UserContext.Provider>
  );
};

export const useUsername = () => useContext(UserContext).username;
export const useSetUsername = () => useContext(UserContext).setUsername;
export const usePassword = () => useContext(UserContext).password;
export const useSetPassword = () => useContext(UserContext).setPassword;
export const useUserAuthenticated = () =>
  useContext(UserContext).userAuthenticated;
export const useSetUserAuthenticated = () =>
  useContext(UserContext).setUserAuthenticated;
