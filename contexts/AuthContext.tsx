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

/**
 * @description Provides authentication state and actions to the application.
 * Manages user state, loading status, and provides login, logout, and data refresh functions.
 * Persists user data in localStorage.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to wrap with the provider.
 */
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  /**
   * @description Initiates the Google login flow using @react-oauth/google.
   * On success, fetches user info from Google, sends it to the backend for validation/creation,
   * updates the user state, and stores user data in localStorage.
   * Displays toast notifications for success or failure.
   * @param {any} [overrideConfig] - Optional configuration overrides for the Google login hook.
   */
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        setLoading(true);
        const googleInfo = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });

        const { data: authResponse } = await axios.post("/api/auth/google/callback", {
          googleId: googleInfo.data.sub,
          email: googleInfo.data.email,
          name: googleInfo.data.name,
          picture: googleInfo.data.picture
        });
        
        if (authResponse.success && authResponse.data) {
          const userData: User = {
            id: authResponse.data.id,
            name: authResponse.data.name || null,
            email: authResponse.data.email,
            image: authResponse.data.image || null,
            apiKey: authResponse.data.apiKey,
            googleId: googleInfo.data.sub,
            credits: authResponse.data.creditsRemaining, 
            creditsUsed: authResponse.data.creditsUsed,
            recharged: !authResponse.data.canRecharge, 
            createdAt: new Date(),
            updatedAt: new Date()
          };
          console.log("DEBUG: Constructed userData object for state:", userData);

          // Save user data to localStorage
          localStorage.setItem("user", JSON.stringify(userData));
          setUser(userData);
          toast.success("Logged in successfully!");
        } else {
          toast.error("Authentication failed: " + (authResponse.message || "Unknown error"));
        }

      } catch (error) {
        console.error("Google login error: ", error);
        toast.error("Failed to log in. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    onError: (errorResponse) => {
      console.error("Login error:", errorResponse);
      toast.error("Google login failed. Please try again.");
    },
    flow: "implicit",
  });

  /**
   * @description Logs the user out by clearing the user state and removing user data from localStorage.
   * Displays toast notifications.
   * @returns {Promise<void>}
   */
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

  /**
   * @description Refreshes the current user's data by fetching the latest details from the backend API.
   * Updates the user state and localStorage if successful.
   * Requires a user to be logged in.
   * Displays toast notifications on failure.
   * @returns {Promise<void>}
   */
  const refreshUserData = async () => {
    if (!user || !user.id) {
        console.error("No user logged in, cannot refresh data.");
        return;
    }
    setLoading(true);
    try {
        const response = await axios.get("/api/user/me", {
            headers: { 'X-User-ID': user.id }
        });
        if (response.data && response.data.success) {
            const latestUserDataBackend = response.data.data;
            const updatedUser: User = {
                id: latestUserDataBackend.id,
                name: latestUserDataBackend.name || null,
                email: latestUserDataBackend.email,
                image: latestUserDataBackend.image || null,
                apiKey: latestUserDataBackend.apiKey,
                googleId: user.googleId, // Keep original googleId from login state
                credits: latestUserDataBackend.creditsRemaining,
                creditsUsed: latestUserDataBackend.creditsUsed,
                recharged: !latestUserDataBackend.canRecharge,
                createdAt: user.createdAt || new Date(),
                updatedAt: new Date()
            };
            setUser(updatedUser);
            localStorage.setItem("user", JSON.stringify(updatedUser));
        } else {
            toast.error("Failed to refresh user data: " + (response.data.message || "Unknown error"));
        }
    } catch (error) {
        console.error("Error refreshing user data:", error);
        toast.error("Failed to refresh user data. Please try again.");
    } finally {
        setLoading(false);
    }
};

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        if (parsedUser && parsedUser.id) {
            setUser(parsedUser);
        } else {
             console.error("Parsed user data invalid", parsedUser);
             localStorage.removeItem("user");
        }
      } catch (e) {
        console.error("Error parsing saved user data", e);
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);
  
  return (
    <AuthContext.Provider value={{ user, loading, isAuthenticated: !!user, login, logout, refreshUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * @description Custom hook to access the authentication context.
 * Must be used within a component wrapped by AuthProvider.
 * @returns {AuthContextType} The authentication context value (user, loading, isAuthenticated, login, logout, refreshUserData).
 * @throws {Error} If used outside of an AuthProvider.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
