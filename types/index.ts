export interface User {
    id: string;
    name: string;
    email: string;
    image: string;
    apiKey: string;
    apiUrl: string;
    googleId: string;
    creditsUsed: number;
    canRecharge: boolean;
    creditsRemaining: number;
    createdAt: Date;
  }
  
  export interface CrudItem {
    id: string;
    value: number;
    txHash: string;
    createdAt: Date | null;
    updatedAt: Date | null;
  }
  
  export interface ApiResponse<T> {
    success: boolean;
    data: T | null;
    message: string;
    error?: string;
  }
  
  export interface ApiErrorResponse {
    success: boolean;
    message: string;
    error: string;
  }
  
  export interface Todo {
    id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface CreditInfo {
    remaining: number;
    used: number;
    canRecharge: boolean;
    rechargeEmail: string;
  }
  