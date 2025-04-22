export interface User {
  id: string;
  name: string | null;
  email: string;
  image: string | null;
  apiKey: string;
  googleId: string;
  creditsUsed: number;
  credits: number;  
  recharged: boolean; 
  createdAt: Date;
  updatedAt: Date;
}

export interface CrudItem {
  id: number;
  userId: string;
  value: number;
  txHash: string;
  createdAt: Date;
  updatedAt: Date;
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

export interface ApiUsageLog {
  id: number;
  userId: string;
  endpoint: string;
  statusCode: number;
  occurredAt: Date;
}

export interface RechargeLog {
  id: number;
  userId: string;
  attemptedAt: Date;
  successful: boolean;
}
