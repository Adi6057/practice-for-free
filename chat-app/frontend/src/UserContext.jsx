// src/context/UserContext.js
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // initially null
  const [loading, setLoading] = useState(true); // for initial auto-login

  // Auto-login on first load using cookies
  const fetchUserFromCookie = async () => {
    try {
      const res = await fetch("http://localhost:3000/", {
        method: "GET",
        credentials: "include", // important for cookies
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      }
    } catch (err) {
      console.error("Auto-login failed:", err);
    } finally {
      setLoading(false);
    }
  };

  // Manual login (email/password)
  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        credentials: "include", // important to store cookie
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) setUser(data.user);
      return data;
    } catch (err) {
      console.error("Login failed:", err);
      return { error: "Login failed" };
    }
  };

  const logout = () => {
    fetch("http://localhost:3000/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    setUser(null);
  };

  useEffect(() => {
    fetchUserFromCookie();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};
