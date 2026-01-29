"use client";

import { useEffect, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export const useConnexion = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [user, setUser] = useState<{ userId: string; email: string } | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const loginMutation = useMutation(api.myConnexion.login);

  // Vérifier si un token existe au démarrage (session persistée)
  useEffect(() => {
    const storedToken = localStorage.getItem("auth_token");
    const storedUser = localStorage.getItem("auth_user");

    if (storedToken && storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
        setToken(storedToken);
        setIsConnected(true);
      } catch (e) {
        console.error("Failed to parse stored user:", e);
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_user");
      }
    }
    setLoading(false);
  }, []);

  // Fonction de login qui appelle la mutation Convex
  const login = async (pseudo: string, email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await loginMutation({ pseudo, email, password });
      setUser(result.user);
      setToken(result.token);
      setIsConnected(true);

      // Persister la session dans localStorage
      localStorage.setItem("auth_token", result.token);
      localStorage.setItem("auth_user", JSON.stringify(result.user));

      return result;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Login failed";
      setError(message);
      setIsConnected(false);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Fonction de logout
  const logout = () => {
    setUser(null);
    setToken(null);
    setIsConnected(false);
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
  };

  return {
    isConnected,
    user,
    loading,
    error,
    token,
    login,
    logout,
    setIsConnected,
    setUser,
  };
};
