'use client'

import { createContext, useContext, useState, useEffect } from "react";
import { UserData, IProduct } from "@/interfaces/interfaces";

interface AppContextProps {
  // Usuario
  dataUser: UserData | null;
  setDataUser: (dataUser: UserData | null) => void;
  logout: () => void;

  // Carrito
  cart: IProduct[];
  setCart: (cart: IProduct[]) => void;

search: string;
setSearch: (search: string) => void;
}

const AppContext = createContext<AppContextProps>({
  dataUser: null,
  setDataUser: () => {},
  logout: () => {},

  cart: [],
  setCart: () => {},

  search: '',
  setSearch: () => {},

});

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [dataUser, setDataUser] = useState<UserData | null>(null);
  const [cart, setCart] = useState<IProduct[]>([]);
  const [search, setSearch] = useState("");

  // 🔹 Cargar estado desde localStorage solo en cliente
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedCart = localStorage.getItem("cart");

    if (storedUser) setDataUser(JSON.parse(storedUser));
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  // 🔹 Persistir usuario en localStorage
  useEffect(() => {
    if (dataUser) {
      localStorage.setItem("user", JSON.stringify(dataUser));
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("cart");
    }
  }, [dataUser]);

  // 🔹 Persistir carrito solo si hay usuario logueado
  useEffect(() => {
    if (dataUser) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, dataUser]);

  const logout = () => {
    setDataUser(null);
    setCart([]);
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
  };

  

  return (
    <AppContext.Provider value={{ dataUser, setDataUser, logout, cart, setCart, search, setSearch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppStore = () => useContext(AppContext);