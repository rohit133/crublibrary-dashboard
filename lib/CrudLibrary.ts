
import axios from 'axios';
import env from './environment';

interface CrudResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

interface CreateData {
  value: number;
  txHash: string;
}

interface UpdateData {
  value?: number;
  txHash?: string;
}

interface CreateResponse {
  id: string;
  status: string;
}

interface GetResponse {
  value: number;
  txHash: string;
}

interface UpdateResponse {
  status: string;
}

interface DeleteResponse {
  status: string;
}

interface CreditInfo {
  creditsRemaining: number;
  creditsUsed: number;
  canRecharge: boolean;
}

class CrudLibrary {
  private apiKey: string;
  private apiUrl: string;

  constructor(apiKey?: string, apiUrl?: string) {
    // Use provided values or defaults from environment
    this.apiKey = apiKey || env.CRUD_API_KEY;
    this.apiUrl = apiUrl || env.CRUD_API_URL;

    if (!this.apiKey || !this.apiUrl) {
      throw new Error('API key and URL are required.');
    }
  }

  private async makeRequest<T>(method: string, endpoint: string, data?: any): Promise<CrudResponse<T>> {
    try {
      const url = `${this.apiUrl}${endpoint}`;
      const headers = { 'x-api-key': this.apiKey };

      let response;
      switch (method.toUpperCase()) {
        case 'GET':
          response = await axios.get(url, { headers });
          break;
        case 'POST':
          response = await axios.post(url, data, { headers });
          break;
        case 'PUT':
          response = await axios.put(url, data, { headers });
          break;
        case 'DELETE':
          response = await axios.delete(url, { headers });
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }

      return response.data;
    } catch (error: any) {
      if (error.response && error.response.status === 403) {
        throw new Error('Request limit exceeded. Please recharge credits.');
      }

      if (error.response && error.response.data && error.response.data.error) {
        throw new Error(error.response.data.error);
      }

      throw error;
    }
  }

  async create(data: CreateData): Promise<CreateResponse> {
    if (data.value === undefined || data.txHash === undefined) {
      throw new Error('Missing required fields: value and txHash are required');
    }

    const response = await this.makeRequest<CreateResponse>('POST', '/crud', data);
    
    if (!response.success) {
      throw new Error(response.error || 'Failed to create item');
    }

    return response.data as CreateResponse;
  }

  async get(id: string): Promise<GetResponse> {
    if (!id) {
      throw new Error('ID is required');
    }

    const response = await this.makeRequest<GetResponse>('GET', `/crud/${id}`);
    
    if (!response.success) {
      throw new Error(response.error || 'Failed to retrieve item');
    }

    return response.data as GetResponse;
  }

  async update(id: string, data: UpdateData): Promise<UpdateResponse> {
    if (!id) {
      throw new Error('ID is required');
    }

    if (Object.keys(data).length === 0) {
      throw new Error('Update data is required');
    }

    const response = await this.makeRequest<UpdateResponse>('PUT', `/crud/${id}`, data);
    
    if (!response.success) {
      throw new Error(response.error || 'Failed to update item');
    }

    return response.data as UpdateResponse;
  }

  async delete(id: string): Promise<DeleteResponse> {
    if (!id) {
      throw new Error('ID is required');
    }

    const response = await this.makeRequest<DeleteResponse>('DELETE', `/crud/${id}`);
    
    if (!response.success) {
      throw new Error(response.error || 'Failed to delete item');
    }

    return response.data as DeleteResponse;
  }

  async getCreditInfo(): Promise<CreditInfo> {
    const response = await this.makeRequest<CreditInfo>('GET', '/credits');
    
    if (!response.success) {
      throw new Error(response.error || 'Failed to retrieve credit information');
    }

    return response.data as CreditInfo;
  }

  async requestCreditRecharge(): Promise<{ message: string }> {
    const response = await this.makeRequest<{ message: string }>('POST', '/credits/recharge');
    
    if (!response.success) {
      throw new Error(response.error || 'Failed to recharge credits');
    }

    return response.data as { message: string };
  }
}

export default CrudLibrary;