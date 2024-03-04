import { useState, createContext } from 'react';

export type AutUser = {
  name: string;
  email: string;
};

type UserContextType = {
  user: AutUser | null;
  setUser: React.Dispatch<React.SetStateAction<AutUser | null>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext <UserContextType | null>(null);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AutUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
