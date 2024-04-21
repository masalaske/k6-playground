import http from 'k6/http';
import { RefinedResponse, ResponseType } from 'k6/http';

export default class HttpClient {
    private baseURL: string;
    private headers: Record<string, string>;

    constructor(baseURL: string, headers: Record<string, string> = {}) {
        this.baseURL = baseURL;
        this.headers = headers;
    }

    post(endpoint: string, payload: string): RefinedResponse<ResponseType> {
        return http.post(`${this.baseURL}${endpoint}`, payload, { headers: this.headers });
    }

    get(endpoint: string): RefinedResponse<ResponseType> {
        return http.get(`${this.baseURL}${endpoint}`, { headers: this.headers });
    }
}
