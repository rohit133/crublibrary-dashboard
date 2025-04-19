"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  Children,
} from "react";
import { User } from "@/types";
import { toast } from "sonner";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  refreshUserData: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined> (undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock Google authentication for this demonstration
  const login = async () => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock user: Generate mock user data with API key and URL
      const mockUser: User = {
        id: "user_" + Math.random().toString(36).substr(2, 9),
        name: "Demo User",
        email: "demo@example.com",
        image: "https://ui-avatars.com/api/?name=Demo+User&background=random",
        apiKey: "api_" + Math.random().toString(36).substr(2, 16),
        apiUrl: "https://api.crudlibrary.com/v1",
        creditsRemaining: 4,
        creditsUsed: 0,
        canRecharge: true,
        createdAt: new Date(),
      };

      /**
       * Addd the google login logic here!!!
       */

      localStorage.setItem("user", JSON.stringify(mockUser));
      setUser(mockUser);
      toast.success("Logged in successfully!");
    } catch (error) {
      console.error("Login error: ", error);
      toast.error("Failed to log in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = async () => {
    try {
      setLoading(true);
      localStorage.removeItem("user");
      setUser(null);
      toast.success("Loged out successfully");
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
    // Check for Saved user on initial load
    if (typeof window !== undefined) {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      setLoading(false);
    }
  }, []);

  return ( 
    <AuthContext.Provider value={{ user, loading, isAuthenticated: !!user, login, logout, refreshUserData }}>
        {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(context === undefined){
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};