"use client";
import axios from "axios";
import { User } from "@/types";
import { toast } from "sonner";
import { useGoogleLogin } from "@react-oauth/google";
import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (overrideConfig?: any) => void;
  logout: () => Promise<void>;
  refreshUserData: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        setLoading(true);

        const { data } = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });

        const googleUser: User = {
          id: data.sub,
          name: data.name,
          email: data.email,
          image: data.picture,
          apiKey: "api_" + Math.random().toString(36).substr(2, 16),
          apiUrl: "https://api.crudlibrary.com/v1",
          googleId: data.sub,
          creditsRemaining: 4,
          creditsUsed: 0,
          canRecharge: true,
          createdAt: new Date(),
        };

        // Save user data to localStorage
        localStorage.setItem("user", JSON.stringify(googleUser));
        setUser(googleUser);
        toast.success("Logged in successfully!");
        
      } catch (error) {
        console.error("Google login error: ", error);
        toast.error("Failed to log in. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    onError: () => {
      toast.error("Google login failed. Please try again.");
    },
  });

  const logout = async () => {
    try {
      setLoading(true);
      localStorage.removeItem("user");
      setUser(null);
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Logout error: ", error);
      toast.error("Failed to log out. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const refreshUserData = async () => {
    try {
      const userData = localStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error("Error refreshing user data:", error);
    }
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, isAuthenticated: !!user, login, logout, refreshUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};