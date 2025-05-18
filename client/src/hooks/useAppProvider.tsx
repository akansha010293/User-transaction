import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  useContext,
  type SetStateAction,
  useEffect,
} from "react";
import type { User } from "../types";

interface AppContextProps {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

const AppContext = createContext<AppContextProps | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Fetch localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse stored user", e);
        localStorage.removeItem("user");
      }
    }
  }, []);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
