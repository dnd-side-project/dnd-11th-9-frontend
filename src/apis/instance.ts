const BASE_URL = 'http://localhost:3000';

export default class ApiInstance {
  static async get<ResponseType = unknown>(endpoint: string, headers = {}): Promise<ResponseType> {
    return this.request<null, ResponseType>('GET', endpoint, null, headers);
  }

  static async post<RequestType = unknown, ResponseType = unknown>(
    endpoint: string,
    body: RequestType,
    headers = {}
  ): Promise<ResponseType> {
    return this.request<RequestType, ResponseType>('POST', endpoint, body, headers);
  }

  static async put<RequestType = unknown, ResponseType = unknown>(
    endpoint: string,
    body: RequestType,
    headers = {}
  ): Promise<ResponseType> {
    return this.request<RequestType, ResponseType>('PUT', endpoint, body, headers);
  }

  static async delete<ResponseType = unknown>(
    endpoint: string,
    headers = {}
  ): Promise<ResponseType> {
    return this.request<null, ResponseType>('DELETE', endpoint, null, headers);
  }

  static async request<RequestType = unknown, ResponseType = unknown>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    endpoint: string,
    body: RequestType | null = null,
    headers = {}
  ): Promise<ResponseType> {
    const url = `${BASE_URL}${endpoint}`;
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : null,
    };

    try {
      const response = await fetch(url, options);
      const data = (await response.json()) as ResponseType;
      if (!response.ok) {
        throw new Error((data as { message?: string }).message || '오류가 발생하였습니다.');
      }
      return data;
    } catch (error) {
      console.error('Request failed:', error);
      throw error; // Optionally rethrow the error after logging
    }
  }
}
